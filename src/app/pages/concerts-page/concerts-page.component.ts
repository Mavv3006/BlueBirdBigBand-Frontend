import { Component, OnInit } from '@angular/core';
import { Concert } from '../../models/concert';
import { ConcertService } from '../../services/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts-page.component.html',
  styleUrls: ['./concerts-page.component.scss'],
})
export class ConcertsPageComponent implements OnInit {
  private _date_formatting_options: any = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  };

  concerts: Concert[] = [];
  hasValues = false;

  get showSpinner() {
    return !this.hasValues;
  }

  get showZeroConcertsMessage() {
    return this.hasValues && this.concerts.length === 0;
  }

  get showConcerts() {
    return this.hasValues && this.concerts.length > 0;
  }

  get spinnerDiameter(): number {
    return 60; // todo: make responsive
  }

  constructor(private _concertService: ConcertService) {}

  ngOnInit(): void {
    this._concertService.upcoming().subscribe((data) => {
      this.concerts = data;
      this.hasValues = true;
    });
  }

  createDay(concert: Concert): string {
    return new Date(concert.date).toLocaleDateString(
      'de-DE',
      this._date_formatting_options
    );
  }

  play_time(concert: Concert): string {
    return (
      concert.start_time.substr(0, 5) +
      ' Uhr - ' +
      concert.end_time.substr(0, 5) +
      ' Uhr | ' +
      concert.descriptions.organizer
    );
  }
}
