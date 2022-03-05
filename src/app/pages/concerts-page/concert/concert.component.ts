import { Concert } from './../../../models/concert';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertComponent {
  @Input()
  concert!: Concert;

  get address(): string {
    return (
      this.concert.descriptions.place +
      ', ' +
      this.concert.location.street +
      ' ' +
      this.concert.location.number +
      ', ' +
      this.concert.location.plz +
      ' ' +
      this.concert.location.name
    );
  }

  private _date_formatting_options: any = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  };

  constructor() {}

  get day(): string {
    return new Date(this.concert.date).toLocaleDateString(
      'de-DE',
      this._date_formatting_options
    );
  }

  get playTime(): string {
    return (
      this.concert.start_time.substring(0, 5) +
      ' Uhr - ' +
      this.concert.end_time.substring(0, 5) +
      ' Uhr | ' +
      this.concert.descriptions.organizer
    );
  }
}
