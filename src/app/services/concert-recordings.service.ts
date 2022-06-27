import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface ConcertRecordingList {
  concert: {
    date: string;
    description: string;
    place: string;
  };
  files: ConcertRecording[];
}

export interface ConcertRecording {
  description: string;
  file_name: string;
  file_size: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConcertRecordingsService {
  constructor(private http: HttpClient) {}

  public get(): Observable<ConcertRecordingList[]> {
    return this.http
      .get<ConcertRecordingList[]>(
        environment.base_url + environment.urls.download.recordings
      )
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
        error.status < 500 ? error.error : ''
      );
    }

    return throwError(() => error.error);
  }
}
