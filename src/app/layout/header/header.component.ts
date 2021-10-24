import { OpenMobileMenuMessageService } from './../../services/open-mobile-menu-message.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobile_menu_hidden = true;

  constructor(
    private openMobileMenuMessageService: OpenMobileMenuMessageService
  ) {}

  toggleMobileMenu() {
    this.mobile_menu_hidden = !this.mobile_menu_hidden;
    this.openMobileMenuMessageService.setState(this.mobile_menu_hidden);
  }
}
