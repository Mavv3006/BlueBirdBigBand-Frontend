import { SlidingMessageService } from './../../../services/sliding-message.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements AfterViewInit {
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

  contact_submenu_native_element: HTMLElement | undefined;

  constructor(private messageService: SlidingMessageService) {}

  ngAfterViewInit() {
    this.contact_submenu_native_element = this.contact_submenu?.nativeElement;
  }

  toggleNews() {}
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

    this.updateContact();
    this.updateLogin();
    this.updateMain();

    this.isContactOpen = !this.isContactOpen;
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
