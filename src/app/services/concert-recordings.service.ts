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
const devData: ConcertRecordingList[] = [
  {
    concert: {
      description: 'Sommerkonzert',
      date: '20.04.2021',
      place: 'Speyer',
    },
    files: [
      {
        description: 'Anfang',
        file_name: 'beginning.mp3',
        file_size: '20 MB',
      },
      { description: 'Mitte', file_name: 'middle.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
    ],
  },
  {
    concert: {
      description: 'Sommerkonzert',
      date: '20.04.2021',
      place: 'Speyer',
    },
    files: [
      {
        description: 'Anfang',
        file_name: 'beginning.mp3',
        file_size: '20 MB',
      },
      { description: 'Mitte', file_name: 'middle.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
    ],
  },
  {
    concert: {
      description: 'Sommerkonzert',
      date: '20.04.2021',
      place: 'Speyer',
    },
    files: [
      {
        description: 'Anfang',
        file_name: 'beginning.mp3',
        file_size: '20 MB',
      },
      { description: 'Mitte', file_name: 'middle.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
    ],
  },
  {
    concert: {
      description: 'Sommerkonzert',
      date: '20.04.2021',
      place: 'Speyer',
    },
    files: [
      {
        description: 'Anfang',
        file_name: 'beginning.mp3',
        file_size: '20 MB',
      },
      { description: 'Mitte', file_name: 'middle.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
    ],
  },
  {
    concert: {
      description: 'Weihnachtskonzert',
      date: '21.05.2019',
      place: 'Ludwigshafen',
    },
    files: [
      { description: 'Anfang', file_name: 'beginning.mp3', file_size: '20 MB' },
      { description: 'Mitte', file_name: 'middle.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
      { description: 'Ende', file_name: 'end.mp3', file_size: '20 MB' },
    ],
  },
];

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
    // TODO: reach out to dev server
    if (environment.production) {
      return this.http
        .get<ConcertRecordingList[]>(
          environment.base_url + environment.urls.intern.concert_recordings
        )
        .pipe(retry(3), catchError(this.handleError));
    }
    return of(devData);
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
