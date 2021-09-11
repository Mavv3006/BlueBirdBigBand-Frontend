import { Component } from '@angular/core';
import { KlausGehrlein } from '../../models/klaus_gehrlein';

@Component({
  templateUrl: './legal-notes.component.html',
  styleUrls: ['./legal-notes.component.scss'],
})
export class LegalNotesComponent {
  bandleader = KlausGehrlein;
}
