import { ConcertService } from './../../services/concert/concert.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Concert } from '../../models/concert';
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
    private concertService: ConcertService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.setConcertsFromLocalStorage();

    this.titleService.setTitle('Auftrittinfos');
    this.concertService.upcoming().subscribe({
      next: (data) => this.handleConcertsFromApi(data),
      error: (error) => {
        console.error('Cannot make request', error);
        this.hasError = true;
      },
    });
  }

  setConcertsFromLocalStorage() {
    const storageConcerts = this.getConcertsFromStorage();
    if (storageConcerts != null) {
      this.setConcerts(storageConcerts);
    }
  }

  handleConcertsFromApi(data: Concert[]) {
    const storageConcerts = this.getConcertsFromStorage();
    if (
      storageConcerts == null ||
      JSON.stringify(data) !== JSON.stringify(storageConcerts)
    ) {
      this.setConcerts(data);
      window.localStorage.setItem(
        LocalStorageKey.concerts,
        JSON.stringify(data)
      );
    }
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
