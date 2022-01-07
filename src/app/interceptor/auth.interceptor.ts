import { TokenService } from './../services/token.service';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.tokenService.getToken() != null) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer: ' + this.tokenService.getToken()!
        ),
      });
      console.log('new headers', request.headers.keys());
    }

    if (!request.headers.has('content-type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event --->>>', event);
        }
        return event;
      })
    );
  }
}
