import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConcertRecordingList,
  ConcertRecordingsService,
} from 'src/app/services/concert-recordings.service';
import { FileDownloadService } from 'src/app/services/file-download/file-download.service';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

@Component({
  selector: 'app-concert-recordings',
  templateUrl: './concert-recordings.component.html',
  styleUrls: ['./concert-recordings.component.scss'],
})
export class ConcertRecordingsComponent implements OnInit {
  recordings: ConcertRecordingList[] | undefined = undefined;

  constructor(
    private recordingService: ConcertRecordingsService,
    private router: Router,
    private fileDownloadService: FileDownloadService
  ) {}

  ngOnInit(): void {
    if (
      window.localStorage.getItem(LocalStorageKey.concert_recordings) !== null
    ) {
      this.recordings = JSON.parse(
        window.localStorage.getItem(LocalStorageKey.concert_recordings)!
      );
    }

    this.recordingService.get().subscribe({
      next: (res: ConcertRecordingList[]) => {
        this.recordings = res;
        window.localStorage.setItem(
          LocalStorageKey.concert_recordings,
          JSON.stringify(res)
        );
      },
      error: (error) => {
        console.error('[ConcertRecordingsComponent]', error);
      },
    });
  }

  downloadFile(file_name: string) {
    this.fileDownloadService.downloadAndSave(file_name, 'recording');
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
