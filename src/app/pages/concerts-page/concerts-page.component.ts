import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Concert } from '../../models/concert';
import { ConcertService } from '../../services/concert.service';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

@Component({
  templateUrl: './concerts-page.component.html',
  styleUrls: ['./concerts-page.component.scss'],
})
export class ConcertsPageComponent implements OnInit {
  concerts: Concert[] = [];
  hasValues = false;
  hasError = false;

  get showSpinner() {
    return !this.hasValues && !this.hasError;
  }

  get showZeroConcertsMessage() {
    return this.hasValues && this.concerts.length === 0 && !this.hasError;
  }

  get showConcerts() {
    return this.hasValues && this.concerts.length > 0 && !this.hasError;
  }

  get spinnerDiameter(): number {
    return 60; // todo: make responsive
  }

  get showErrorMessage() {
    return this.hasError;
  }

  constructor(
    private _concertService: ConcertService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // TODO: add current concert to local Storage and fetch in the background. If some concerts are different, update the UI accordingly
    const storageConcerts = this.getConcertsFromStorage();
    if (storageConcerts != null) {
      this.setConcerts(storageConcerts);
    }

    this.titleService.setTitle('Auftrittinfos');
    this._concertService.upcoming().subscribe(
      (data) => {
        if (storageConcerts == null || data != storageConcerts) {
          console.debug('[ConcertsPageComponent] updating concerts');
          this.setConcerts(data);
          return;
        }
        console.debug('[ConcertsPageComponent] concerts already up to date');
      },
      (error) => {
        console.error('Cannot make request', error);
        this.hasError = true;
      }
    );
  }

  setConcerts(concerts: Concert[]) {
    this.concerts = concerts;
    this.hasValues = true;
  }

  getConcertsFromStorage(): Concert[] | null {
    const storageConcerts = window.localStorage.getItem(
      LocalStorageKey.concerts
    );
    if (storageConcerts === null) {
      return null;
    }

    return JSON.parse(storageConcerts);
  }
}
