import { SlidingMessageService } from './../../../services/sliding-message.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent {
  @ViewChild('band_container')
  band_container: ElementRef | undefined;

  @ViewChild('band_submenu')
  band_submenu: ElementRef | undefined;

  @ViewChild('contact_container')
  contact_container: ElementRef | undefined;

  @ViewChild('contact_submenu')
  contact_submenu: ElementRef | undefined;

  @ViewChild('login_container')
  login_container: ElementRef | undefined;

  band_container_transform_pixel = -3 * 47;
  band_submenu_transform_pixel = -3 * 47;
  contact_container_transform_pixel = -6 * 47;
  contact_submenu_transform_pixel = -6 * 47;
  login_container_transform_pixel = -8 * 47;
  main_transform_pixel = -8 * 47;

  isNewsOpen = false;
  isBandOpen = false;
  isContactOpen = false;

  readonly news_pixel = 3 * 47;
  readonly band_pixel = 3 * 47;
  readonly contact_pixel = 2 * 47;

  constructor(private messageService: SlidingMessageService) {}

  toggleNews() {
    if (this.isNewsOpen) {
      this.band_container_transform_pixel -= this.news_pixel;
      this.band_submenu_transform_pixel -= this.news_pixel;

      this.contact_container_transform_pixel -= this.news_pixel;
      this.contact_submenu_transform_pixel -= this.news_pixel;

      this.login_container_transform_pixel -= this.news_pixel;

      this.main_transform_pixel -= this.news_pixel;
    } else {
      this.band_container_transform_pixel += this.news_pixel;
      this.band_submenu_transform_pixel += this.news_pixel;

      this.contact_container_transform_pixel += this.news_pixel;
      this.contact_submenu_transform_pixel += this.news_pixel;

      this.login_container_transform_pixel += this.news_pixel;

      this.main_transform_pixel += this.news_pixel;
    }

    this.updateBand();
    this.updateContact();
    this.updateLogin();
    this.updateMain();

    this.isNewsOpen = !this.isNewsOpen;
  }

  toggleBand() {
    if (this.isBandOpen) {
      this.contact_container_transform_pixel -= this.band_pixel;
      this.contact_submenu_transform_pixel -= this.band_pixel;

      this.login_container_transform_pixel -= this.band_pixel;

      this.main_transform_pixel -= this.band_pixel;
    } else {
      this.contact_container_transform_pixel += this.band_pixel;
      this.contact_submenu_transform_pixel += this.band_pixel;

      this.login_container_transform_pixel += this.band_pixel;

      this.main_transform_pixel += this.band_pixel;
    }

    this.updateBand();
    this.updateContact();
    this.updateLogin();
    this.updateMain();

    this.isBandOpen = !this.isBandOpen;
  }

  toggleContact() {
    if (this.isContactOpen) {
      this.login_container_transform_pixel -= this.contact_pixel;

      this.main_transform_pixel -= this.contact_pixel;
    } else {
      this.login_container_transform_pixel += this.contact_pixel;

      this.main_transform_pixel += this.contact_pixel;
    }

    this.updateBand();
    this.updateContact();
    this.updateLogin();
    this.updateMain();

    this.isContactOpen = !this.isContactOpen;
  }

  private updateBand() {
    (this.band_container?.nativeElement as HTMLElement).style.transform =
      'translateY(' + this.band_container_transform_pixel + 'px)';

    (this.band_submenu?.nativeElement as HTMLElement).style.transform =
      'translateY(' + this.band_submenu_transform_pixel + 'px)';
  }

  private updateContact() {
    (this.contact_container?.nativeElement as HTMLElement).style.transform =
      'translateY(' + this.contact_container_transform_pixel + 'px)';

    (this.contact_submenu?.nativeElement as HTMLElement).style.transform =
      'translateY(' + this.contact_submenu_transform_pixel + 'px)';
  }

  private updateLogin() {
    (this.login_container?.nativeElement as HTMLElement).style.transform =
      'translateY(' + this.login_container_transform_pixel + 'px)';
  }

  private updateMain() {
    setTimeout(() => {
      this.messageService.sendMessage(this.main_transform_pixel);
    }, 0);
  }
}
