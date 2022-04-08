import { LocalStorageKey } from 'src/app/storage/local-storage-keys';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = window.localStorage.getItem(
      LocalStorageKey.is_logged_in
    );
    if (isLoggedIn !== null && isLoggedIn == 'true') {
      return true;
    }

    // navigate to login page as user is not authenticated
    this.router.navigate(['auth/login'], {
      queryParams: {
        redirect:
          route.url.length == 0 ? 'intern' : 'intern/' + route.url.join('/'),
      },
    });
    return false;
  }
}
