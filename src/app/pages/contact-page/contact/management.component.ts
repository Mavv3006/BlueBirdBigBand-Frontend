import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-management',
  template: ` <app-contact
    email="buchung@bluebirdbigband.de"
    telephone="06232 62 19 15"
    name="Rudi Kolbinger"
    [bold_name]="bold_name"
  >
  </app-contact>`,
})
export class ManagementComponent {
  @Input()
  bold_name = false;
}
