import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Concert } from '../models/concert';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) { }

  upcoming() {
    return this.http.get<Concert[]>(environment.concerts.upcoming_url);
  }
}
