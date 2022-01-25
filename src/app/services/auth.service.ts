import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';

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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(data: LoginData) {
    return this.http
      .post<LoginResponse>(environment.urls.auth.login, data)
      .pipe(retry(3), catchError(this.handleError));
  }

  public logout() {
    return this.http
      .get(environment.urls.auth.login)
      .pipe(retry(3), catchError(this.handleError));
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

    return throwError('Something bad happened; please try again later');
  }
}
