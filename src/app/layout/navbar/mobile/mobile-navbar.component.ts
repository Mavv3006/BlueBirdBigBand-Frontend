import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import {
  Component,
  ElementRef,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

type ViewChildRef = ElementRef | undefined;

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit {
  isLoggedIn = false;

  @Input()
  isOpen: boolean = false;

  @Output()
  isOpenChange = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (value: boolean) => {
        console.debug('[DesktopNavbarComponent] isLoggedIn =', value);
        this.isLoggedIn = value;
      },
    });
  }

  logout() {
    this.authService.logout({
      next: (val) => console.debug('[DesktopNavbarComponent]', val),
      error: () => {},
      complete: () => {
        // TODO: redirect to home if current route is in intern namespace
      },
    });
  }

  login() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
    this.router.navigate(['auth/login']);
  }

  onHomeClicked() {}
}
