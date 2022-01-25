import { TokenService } from './../../../services/token.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hasLoginError = false;
  form = this.formBuilder.group({
    password: [''],
    username: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  login() {
    this.authService
      .login({
        name: this.form.value.username,
        password: this.form.value.password,
      })
      .subscribe(
        this.handleLogin,
        (error) => {
          this.hasLoginError = true;
        },
        () => {
          if (!this.hasLoginError) {
            this.router.navigateByUrl('/intern');
          }
        }
      );
  }

  private handleLogin(response: LoginResponse) {
    this.tokenService.setExpireDateTime(response.expires.at);
    this.tokenService.setToken(response.access_token);
  }
}
