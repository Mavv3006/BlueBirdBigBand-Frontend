import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Song {
  title: string;
  genre: string;
  author: string;
  arranger: string;
  file_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient) {}

  public get(): Observable<Song[]> {
    return this.http
      .get<Song[]>(environment.base_url + environment.urls.download.songs)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
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
