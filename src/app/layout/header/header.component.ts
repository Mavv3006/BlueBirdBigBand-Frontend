import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobile_menu_hidden = true;

  constructor() {}

  toggleMobileMenu() {
    this.mobile_menu_hidden = !this.mobile_menu_hidden;
  }
}
