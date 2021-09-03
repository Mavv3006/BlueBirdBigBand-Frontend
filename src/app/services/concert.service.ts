import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Concert } from '../models/concert';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) { }

  upcoming() {
    console.log("GET " + environment.concerts.upcoming_url);
    return this.http.get<Concert[]>(environment.concerts.upcoming_url);
  }
}
