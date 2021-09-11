import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-bandleader',
  template: `
    <app-contact
      email="bandleiter@bluebirdbigband.de"
      telefax="0621 3 19 74 88"
      telephone="0621 40 94 97"
      name="Klaus Gehrlein"
      [bold_name]="bold_name"
    ></app-contact>
  `,
})
export class BandleaderComponent {
  @Input()
  bold_name = false;
}
