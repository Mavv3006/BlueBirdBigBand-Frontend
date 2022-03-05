import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as saveAs from 'file-saver';

export type FileType = 'song' | 'recording';

@Injectable({
  providedIn: 'root',
})
export class FileDownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(filename: string, type: FileType) {
    return this.http.get(
      environment.base_url +
        environment.urls.download +
        '/' +
        type +
        '?file_name=' +
        filename,
      { responseType: 'blob' }
    );
  }

  downloadAndSave(filename: string, type: FileType) {
    this.downloadFile(filename, type).subscribe((blob) => {
      saveAs(blob, filename);
    });
  }
}
