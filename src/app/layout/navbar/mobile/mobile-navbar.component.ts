import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent {
  constructor() {}

  toggleVisibility(element: HTMLElement) {}
}
