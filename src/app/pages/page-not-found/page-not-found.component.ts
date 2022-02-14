import { FileDownloadService } from './../../services/file-download.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(private fileDownload: FileDownloadService) {}

  requestFile() {
    this.fileDownload.downloadFile('test.txt');
  }
}
