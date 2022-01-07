import { CoreService } from './core.service';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface LoginResponse {
  access_token: 'string';
  token_type: 'string';
  expires: {
    in: number;
    at: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private tokenService: TokenService,
    private coreService: CoreService
  ) {}

  public login(username: string, password: string) {
    let data = {
      username: username,
      password: password,
    };
    this.coreService.post(environment.urls.auth.login, data).subscribe(
      (val) => {
        console.log('login response value', val);
        this.tokenService.setToken(val.access_token);
      },
      () => {},
      () => {
        console.log('Login done');
      }
    );
  }

  public logout() {
    this.coreService.get(environment.urls.auth.logout).subscribe(
      (val) => {
        console.log('logout response value', val);
      },
      () => {},
      () => {
        console.log('Logout done');
        this.tokenService.clear();
      }
    );
  }

  public isLoggedIn(): boolean {
    return this.tokenService.getToken() !== null;
  }
}
