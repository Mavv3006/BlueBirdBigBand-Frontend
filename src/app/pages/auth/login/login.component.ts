import { TokenService } from './../../../services/token/token.service';
import { Router } from '@angular/router';
import {
  AuthService,
  LoginResponse,
} from '../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hasLoginError = false;
  hasClicked = false;
  form = this.formBuilder.group({
    password: [''],
    username: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  login() {
    this.hasLoginError = false;
    this.hasClicked = true;
    this.authService.login({
      data: {
        name: this.form.value.username,
        password: this.form.value.password,
      },
      next: (response: LoginResponse) => this.handleLogin(response),
      error: (error) => {
        this.hasLoginError = true;
        this.hasClicked = false;
        console.info(error);
      },
      complete: () => {
        this.hasClicked = false;
        // TODO: redirect to query param
        this.router.navigateByUrl('/intern');
      },
    });
  }

  private handleLogin(response: LoginResponse) {
    this.tokenService.setExpireDateTime(response.expires.at);
    this.tokenService.setToken(response.access_token);
  }
}
