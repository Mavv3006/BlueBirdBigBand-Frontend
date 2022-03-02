import { Component, OnInit } from '@angular/core';
import {
  ConcertRecordingList,
  ConcertRecordingsService,
} from 'src/app/services/concert-recordings.service';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

@Component({
  selector: 'app-concert-recordings',
  templateUrl: './concert-recordings.component.html',
  styleUrls: ['./concert-recordings.component.scss'],
})
export class ConcertRecordingsComponent implements OnInit {
  recordings: ConcertRecordingList[] | undefined = undefined;

  constructor(private recordingService: ConcertRecordingsService) {}

  ngOnInit(): void {
    if (
      window.localStorage.getItem(LocalStorageKey.concert_recordings) !== null
    ) {
      this.recordings = JSON.parse(
        window.localStorage.getItem(LocalStorageKey.concert_recordings)!
      );
    }

    this.recordingService.get().subscribe(
      (res: ConcertRecordingList[]) => {
        this.recordings = res;
        window.localStorage.setItem(
          LocalStorageKey.concert_recordings,
          JSON.stringify(res)
        );
      },
      (error) => {
        console.error('[ConcertRecordingsComponent]', error);
      }
    );
  }

  downloadFile(file_name: string) {
    console.debug('Hier würde der Dateidownload stattfinden.');
  }
}
