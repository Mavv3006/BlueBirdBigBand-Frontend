import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input()
  email: string = '';

  @Input()
  name: string = '';

  @Input()
  telephone: string = '';

  @Input()
  telefax: string | undefined;

  @Input()
  bold_name: boolean = false;
}
