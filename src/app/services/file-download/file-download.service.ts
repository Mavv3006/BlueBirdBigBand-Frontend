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

  static getDownloadUrl(filename: string, type: FileType): string {
    return (
      environment.base_url +
      environment.urls.download +
      '/' +
      type +
      '?`file_name' +
      filename
    );
  }

  downloadFile(filename: string, type: FileType) {
    return this.http.get(FileDownloadService.getDownloadUrl(filename, type), {
      responseType: 'blob',
    });
  }

  downloadAndSave(filename: string, type: FileType) {
    this.downloadFile(filename, type).subscribe((blob) => {
      saveAs(blob, filename);
    });
  }
}
