import { FileDownloadService } from './../../services/file-download.service';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(private fileDownload: FileDownloadService) {}

  requestFile() {
    const filename = 'This is me.mp3';
    this.fileDownload
      .downloadFile('songs/' + filename)
      .subscribe((blob) => saveAs(blob, filename));
  }
}
