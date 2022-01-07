import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  public delete(url: string, data: any): Observable<any> {
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errMsg = '';

    if (error.error instanceof ErrorEvent) {
      // Client side error
      errMsg = `Error: ${error.message}`;
    } else {
      // Server side error
      errMsg = `Error Code: ${error.status}, Message: ${error.message}`;
    }

    // return an observable
    return throwError(errMsg);
  }
}
