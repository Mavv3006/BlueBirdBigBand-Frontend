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
    const token = window.localStorage.getItem(LocalStorageKey.jwt);
    return token;
  }

  public setExpireDateTime(value: number): void {
    window.localStorage.setItem(
      LocalStorageKey.expire_date_time,
      value.toString()
    );
  }

  public getExpireDateTime(): Date | null {
    let value = window.localStorage.getItem(LocalStorageKey.expire_date_time);
    if (value == null) {
      return null;
    }
    return new Date(+value * 1000);
  }

  public clear(): void {
    window.localStorage.removeItem(LocalStorageKey.jwt);
    window.localStorage.removeItem(LocalStorageKey.expire_date_time);
  }
}
