import { Musician } from './../../../models/musician';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-musicians-instrument',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss'],
})
export class InstrumentListComponent {
  @Input()
  musicians: Musician[] = [];

  @Input()
  instrument: string = '';
}
