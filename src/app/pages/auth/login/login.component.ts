import { TokenService } from './../../../services/token/token.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  AuthService,
  LoginResponse,
} from '../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasLoginError = false;
  hasClicked = false;
  form = this.formBuilder.group({
    password: [''],
    username: [''],
  });

  _redirect: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (value: Params) => (this._redirect = value['redirect']),
    });
  }

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
        this.router.navigateByUrl(this._redirect);
      },
    });
  }

  private handleLogin(response: LoginResponse) {
    this.tokenService.setExpireDateTime(response.expires.at);
    this.tokenService.setToken(response.access_token);
  }
}
