import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartialObserver } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileDownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(filename: string): void {
    const options = {
      headers: new HttpHeaders({
        Accept: 'text/plain; charset=UTF-8',
        responseType: 'text',
      }),
      params: new HttpParams().set('name', filename),
    };

    const observer: PartialObserver<Blob> = {
      next: (data: Blob) => {
        console.info('requesting the file was successful 😃');
        const downloadURL = URL.createObjectURL(data);
        window.open(downloadURL);
      },
      error: (error) => {
        console.error('requesting the file resulted in an error 😔');
        console.error(error);
      },
    };

    this.http
      .get<Blob>(
        environment.base_url + environment.urls.download + '/filename',
        options
      )
      .subscribe(observer);
  }
}
