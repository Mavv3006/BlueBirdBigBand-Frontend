import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop_navbar.component.html',
  styleUrls: ['./desktop_navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DesktopNavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (value: boolean) => {
        this.isLoggedIn = value;
      },
    });
  }

  logout() {
    this.authService.logout({
      next: () => {},
      error: () => {},
      complete: () => {
        if (this.router.url.startsWith('/intern')) {
          this.router.navigate(['']);
        }
      },
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
