import { TokenService } from './../../services/token/token.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.debug('[DEBUG] Inside the AuthInterceptor');

    const token = this.tokenService.getToken();
    if (token != null) {
      request = request.clone({
        headers: request.headers.set('authorization', 'bearer ' + token),
      });
    }

    if (!request.headers.has('content-type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request);
  }
}