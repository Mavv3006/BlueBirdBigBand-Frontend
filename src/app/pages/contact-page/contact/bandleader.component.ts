import { Component, Input } from '@angular/core';
import { KlausGehrlein } from '../../../models/klaus_gehrlein';

@Component({
  selector: 'app-contact-bandleader',
  template: `
    <app-contact
      email="{{ bandleader.email }}"
      telefax="{{ bandleader.telefax }}"
      telephone="{{ bandleader.telephone }}"
      name="{{ bandleader.name }}"
      mobile="{{ bandleader.mobile }}"
      [bold_name]="bold_name"
    ></app-contact>
  `,
})
export class BandleaderComponent {
  bandleader = KlausGehrlein;

  @Input()
  bold_name = false;
}
