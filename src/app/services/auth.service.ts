import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageKey } from '../storage/local-storage-keys';

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
  constructor(private http: HttpClient) {}

  public login(username: string, password: string) {
    return this.http.post<LoginResponse>(environment.urls.auth.login, {
      username: username,
      password: password,
    });
  }

  public logout() {
    return this.http.get(environment.urls.auth.logout);
  }

  public isLoggedIn(): boolean {
    // TODO: add check for format of item with LocalStorageKey.jwt key
    let item = localStorage.getItem(LocalStorageKey.jwt);
    return item !== null;
  }
}
