import { LocalStorageKey } from './../storage/local-storage-keys';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  public setToken(token: string): void {
    console.info('localStorage set', { JWT: token });
    window.localStorage.setItem(LocalStorageKey.jwt, token);
  }

  public getToken(): string | null {
    const token = window.localStorage.getItem(LocalStorageKey.jwt);
    console.info('localStorage get', { JWT: token });
    return token;
  }

  public clear(): void {
    console.info('localStorage clear');
    window.localStorage.removeItem(LocalStorageKey.jwt);
  }
}
