import { Concert } from './../../models/concert';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  constructor(private http: HttpClient) {}

  upcoming() {
    return this.http.get<Concert[]>(
      environment.base_url + environment.urls.concerts.upcoming
    );
  }
}
