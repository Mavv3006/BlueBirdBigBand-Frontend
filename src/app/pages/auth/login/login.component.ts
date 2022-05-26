import { TokenService } from './../../../services/token/token.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  AuthService,
  LoginResponse,
} from '../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

const client_error = 'Error beim Login: Benutzername oder Passwort falsch.';
const network_error =
  'Error beim Login: Verbindung mit dem Server fehlgeschlagen.';
const server_error = 'Error beim Login: Internal Server Error.';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasLoginError = false;
  hasClicked = false;
  error_source: 'client' | 'network' | null | 'server' = null;
  error_message = '';
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
    this.error_source = null;
    this.authService.login({
      data: {
        name: this.form.value.username,
        password: this.form.value.password,
      },
      next: (response: LoginResponse) => this.handleLogin(response),
      error: (error) => {
        this.hasLoginError = true;
        this.hasClicked = false;
        this.error_source = error.is_client
          ? 'client'
          : error.is_server
          ? 'server'
          : 'network';
        this.error_message = error.is_client
          ? client_error
          : error.is_server
          ? server_error
          : network_error;
        console.error('Login error', {
          source: this.error_source,
          message: this.error_message,
          status: error.error.status,
        });
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
