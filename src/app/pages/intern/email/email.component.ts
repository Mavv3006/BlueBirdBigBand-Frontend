import { EmailService, EmailGroup } from './../../../services/email.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

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
    if (window.localStorage.getItem(LocalStorageKey.email) !== null) {
      this.email = JSON.parse(
        window.localStorage.getItem(LocalStorageKey.email)!
      );
    }

    this.emailService.get().subscribe(
      (res: EmailGroup[]) => {
        this.email = res;
        window.localStorage.setItem(LocalStorageKey.email, JSON.stringify(res));
      },
      (error) => {
        console.error('[EmailComponent]', error);
      }
    );
  }
}
