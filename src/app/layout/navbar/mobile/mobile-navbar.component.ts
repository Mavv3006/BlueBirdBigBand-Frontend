import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import {
  Component,
  ElementRef,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

type ViewChildRef = ElementRef | undefined;

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit {
  @ViewChild('home')
  homeRef: ViewChildRef;

  @ViewChild('news')
  newsRef: ViewChildRef;

  @ViewChild('band')
  bandRef: ViewChildRef;

  @ViewChild('contact')
  contactRef: ViewChildRef;

  @ViewChild('intern')
  internRef: ViewChildRef;

  @ViewChild('login')
  loginRef: ViewChildRef;

  @ViewChild('logout')
  logoutRef: ViewChildRef;

  homeIsOpen = false;
  newsIsOpen = false;
  bandIsOpen = false;
  contactIsOpen = false;
  internIsOpen = false;
  loginIsOpen = false;
  logoutIsOpen = false;

  isLoggedIn = false;

  @Input()
  isOpen: boolean = false;

  @Output()
  isOpenChange = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (value: boolean) => {
        console.debug('[MobileNavbarComponent] isLoggedIn =', value);
        this.isLoggedIn = value;
      },
    });
  }

  logout() {
    this.authService.logout({
      next: (val) => console.debug('[MobileNavbarComponent]', val),
      error: () => {},
      complete: () => {
        if (this.router.url.startsWith('/intern')) {
          this.navigateTo('', '');
          return;
        }
        this.close();
      },
    });
  }

  private close() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  navigateTo(route: string, containerName: string) {
    this.closeContainer(containerName);
    this.close();
    console.debug('navigate to "' + route + '"');
    this.router.navigate([route]);
  }

  private closeContainer(containerName: string) {
    switch (containerName) {
      case 'home':
        this.homeIsOpen = false;
        break;
      case 'news':
        this.newsIsOpen = false;
        break;
      case 'band':
        this.bandIsOpen = false;
        break;
      case 'contact':
        this.contactIsOpen = false;
        break;
      case 'intern':
        this.internIsOpen = false;
        break;
      case 'login':
        this.loginIsOpen = false;
        break;
      case 'logout':
        this.logoutIsOpen = false;
        break;
      default:
        break;
    }
  }
}
