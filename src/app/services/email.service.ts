import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EmailBand {
  name: string;
  emails: Email[];
}

export interface Email {
  name: string;
  emails: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public get(): Observable<EmailBand[]> {
    return this.http.get<EmailBand[]>(
      environment.base_url + environment.urls.intern.emails
    );
  }
}
