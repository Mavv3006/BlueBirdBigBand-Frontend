import { LocalStorageKey } from './../storage/local-storage-keys';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  public setToken(token: string): void {
    window.localStorage.setItem(LocalStorageKey.jwt, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(LocalStorageKey.jwt);
  }

  public clear(): void {
    window.localStorage.removeItem(LocalStorageKey.jwt);
  }
}
