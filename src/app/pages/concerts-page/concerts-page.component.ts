import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Concert } from '../../models/concert';
import { ConcertService } from '../../services/concert.service';

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
    this.titleService.setTitle('Auftrittinfos');
    this._concertService.upcoming().subscribe(
      (data) => {
        this.concerts = data;
        this.hasValues = true;
      },
      (error) => {
        console.error('Cannot make request', error);
        this.hasError = true;
      }
    );
  }
}
