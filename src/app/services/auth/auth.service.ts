import { environment } from '../../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';

export interface LoginData {
  name: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires: {
    in: number;
    at: number;
  };
}

export interface LogoutResponse {
  message: string;
}

export type LoginParams = {
  data: LoginData;
  next: (value: LoginResponse) => void;
  error: (error: any) => void;
  complete?: (() => void) | undefined;
};

export type LogoutParams = {
  next: (value: LogoutResponse) => void;
  error: (error: any) => void;
  complete?: (() => void) | undefined;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn: BehaviorSubject<boolean>;

  public get isLoggedIn(): BehaviorSubject<boolean> {
    return this._isLoggedIn;
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this._isLoggedIn = new BehaviorSubject<boolean>(this.loggedIn());
  }

  public login(params: LoginParams) {
    this.http
      .post<LoginResponse>(
        environment.base_url + environment.urls.auth.login,
        params.data
      )
      .pipe(retry(3), catchError(this.handleError))
      .subscribe({
        next: (res: LoginResponse) => {
          this.tokenService.setToken(res.access_token);
          this.tokenService.setExpireDateTime(res.expires.at);
          this.isLoggedIn.next(this.loggedIn());
          params.next(res);
        },
        error: params.error,
        complete: params.complete,
      });
  }

  public logout(params: LogoutParams) {
    this.http
      .get<LogoutResponse>(environment.base_url + environment.urls.auth.logout)
      .pipe(retry(3), catchError(this.handleError))
      .subscribe({
        next: (res: LogoutResponse) => {
          this.tokenService.clear();
          this.isLoggedIn.next(this.loggedIn());
          params.next(res);
        },
        error: params.error,
        complete: params.complete,
      });
  }

  private loggedIn(): boolean {
    return this.tokenService.getToken() !== null;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // client side or network error
      console.error('An error occurred: ', error.error);
    } else {
      // the backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError(() => error.error);
  }
}
