import {
  EmailGroup,
  EmailService,
} from './../../../services/email/email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-heading>E-Mail Verteiler</app-heading>
    <div class="email-group" *ngFor="let group of email">
      <app-email-group [emails]="group"></app-email-group>
    </div>
  `,
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  email: EmailGroup[] | undefined = undefined;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    // TODO: add emails to local Storage after fetching
    // if (window.localStorage.getItem(LocalStorageKey.email) != null) {
    //   let email_string = window.localStorage.getItem(LocalStorageKey.email);
    // }

    this.emailService.get().subscribe(
      (res: EmailGroup[]) => {
        this.email = res;
        console.debug('[EmailComponent]', this.email);
      },
      (error) => {
        console.error('[EmailComponent]', error);
      }
    );
  }
}
