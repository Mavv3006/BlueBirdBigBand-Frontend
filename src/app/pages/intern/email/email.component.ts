import { LocalStorageKey } from './../../../storage/local-storage-keys';
import { Subject } from 'rxjs';
import { EmailService, EmailBand } from './../../../services/email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  email: EmailBand[] | undefined = undefined;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    if (window.localStorage.getItem(LocalStorageKey.email) != null) {
      let email_string = window.localStorage.getItem(LocalStorageKey.email);
    }

    this.emailService.get().subscribe(
      (res: EmailBand[]) => {
        this.email = res;
      },
      (error) => {
        console.error('[EmailComponent]', error);
      }
    );
  }
}
