import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileDownloadService {
  private url =
    environment.base_url + environment.urls.download + '/filename?name=';
  constructor(private http: HttpClient) {}

  downloadFile(filename: string) {
    return this.http.get(this.url + filename, { responseType: 'blob' });
  }
}
