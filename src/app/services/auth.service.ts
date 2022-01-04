import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string) {
    return this.http.post(environment.urls.auth.login, '');
  }

  public logout() {}

  public isLoggedIn(): boolean {
    // TODO: add check for format of item with LocalStorageKey.jwt key
    let item = localStorage.getItem(LocalStorageKey.jwt);
    return item !== null;
  }
}
