import { Component, Input } from '@angular/core';
import { EmailGroup } from './email.component';

@Component({
  selector: 'app-email-group',
  template: `
    <header>
      <h3>{{ emails.name }}</h3>
    </header>
    <div class="mail">
      <div *ngFor="let mail of emails.emails">
        <div>
          <p class="name">{{ mail.name }}:</p>
          <p>
            <a href="{{ 'mailto:' + mail.email }}">{{ mail.email }}</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .name {
        float: left;
        margin: 0 5px;
      }
    `,
    `
      .mail {
        display: flex;
        gap: 2em;
        flex-direction: column;
        margin-top: 5px;
      }
    `,
    `
      header {
        margin-top: 1.5em;
        font-size: 115%;
      }
    `,
  ],
})
export class EmailGroupComponent {
  @Input()
  emails: EmailGroup = { name: '', emails: [{ name: '', email: '' }] };
}
