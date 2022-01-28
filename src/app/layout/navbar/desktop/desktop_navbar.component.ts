import { AuthService, LogoutResponse } from './../../../services/auth.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop_navbar.component.html',
  styleUrls: ['./desktop_navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DesktopNavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (value: boolean) => {
        console.debug('[DesktopNavbarComponent] isLoggedIn =', value);
        this.isLoggedIn = value;
      },
    });
  }

  clickme() {
    this.authService.logout({
      next: (val) => console.debug('[DesktopNavbarComponent]', val),
      error: () => {},
      complete: () => {
        // TODO: redirect to home if current route is in intern namespace
      },
    });
  }
}
