import { Component } from '@angular/core';

export interface EmailGroup {
  name: string;
  emails: Email[];
}

export interface Email {
  name: string;
  email: string;
}

@Component({
  template: `
    <app-heading>E-Mail Verteiler</app-heading>
    <div class="email-group" *ngFor="let group of email">
      <app-email-group [emails]="group"></app-email-group>
    </div>
  `,
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  email: EmailGroup[] = [
    {
      name: 'ALLE (Midi / Maxi)',
      emails: [
        { name: 'Alle (Midi/Maxi)', email: 'MusikerInnen@BlueBirdBigBand.de' },
      ],
    },
    {
      name: 'MAXI',
      emails: [
        {
          name: 'Alle Maxi-Mitglieder',
          email: 'maxi@BlueBirdBigBand.de',
        },
        {
          name: 'Saxophonsatz',
          email: 'maxi-Saxophone@BlueBirdBigBand.de',
        },
        {
          name: 'Posaunensatz',
          email: 'maxi-Posaunen@BlueBirdBigBand.de',
        },
        {
          name: 'Trompetensatz',
          email: 'maxi-Trompeten@BlueBirdBigBand.de',
        },
        {
          name: 'Rhythmusgruppe',
          email: 'maxi-Rhythmusgruppe@BlueBirdBigBand.de',
        },
      ],
    },
    {
      name: 'MIDI',
      emails: [
        {
          name: 'Alle Midi-Mitglieder',
          email: 'midi@BlueBirdBigBand.de',
        },
        {
          name: 'Saxophonsatz',
          email: 'midi-Saxophone@BlueBirdBigBand.de',
        },
        {
          name: 'Posaunensatz',
          email: 'midi-Posaunen@BlueBirdBigBand.de',
        },
        {
          name: 'Trompetensatz',
          email: 'midi-Trompeten@BlueBirdBigBand.de',
        },
        {
          name: 'Rhythmusgruppe',
          email: 'midi-Rhythmusgruppe@BlueBirdBigBand.de',
        },
      ],
    },
    {
      name: 'SONSTIGE',
      emails: [
        {
          name: 'Bandleader',
          email: 'bandleiter@BlueBirdBigBand.de',
        },
        {
          name: 'Webmaster',
          email: 'webadmin@bluebirdbigband.de',
        },
      ],
    },
  ];
}
