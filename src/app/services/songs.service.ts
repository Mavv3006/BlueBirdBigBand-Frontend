import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Song {
  title: string;
  genre: string;
  author: string;
  arranger: string;
  file_name: string;
}

export const songsDevData: Song[] = [
  {
    title: 'A Night in Tunisia',
    genre: 'Latin Rock',
    author: 'Dizzy Gillespie & Fr. Paparelli',
    arranger: 'Michael Sweeney',
    file_name: 'a_night.mp3',
  },
  {
    title: 'Bad Bad Leroy Brown',
    genre: '	Shuffle',
    author: 'Jim Croce',
    arranger: 'Eric Osterling',
    file_name: 'bblb.mp3',
  },
];

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient) {}

  public get(): Observable<Song[]> {
    if (environment.production) {
      return this.http
        .get<Song[]>(environment.base_url + environment.urls.intern.emails)
        .pipe(retry(3), catchError(this.handleError));
    }
    return of(songsDevData);
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

    return throwError(error.error);
  }
}
