import { Component } from '@angular/core';
import { KlausGehrlein } from '../../models/klaus_gehrlein';

@Component({
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent {
  bandleader = KlausGehrlein;
}
