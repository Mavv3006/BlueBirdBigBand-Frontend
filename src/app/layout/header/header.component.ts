import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobile_menu_open = false;

  toggleMobileMenu() {
    this.mobile_menu_open = !this.mobile_menu_open;
  }
}
