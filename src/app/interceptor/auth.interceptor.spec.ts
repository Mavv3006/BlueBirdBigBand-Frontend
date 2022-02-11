import { TokenService } from './../services/token.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from '../services/auth.service';

describe('AuthInterceptor', () => {
  let injector: TestBed;
  let tokenService: TokenService;
  let httpMock: HttpTestingController;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    injector = getTestBed();
    authService = injector.inject(AuthService);
    tokenService = injector.inject(TokenService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should add token to http header', () => {
    const token = 'test';
    tokenService.setToken(token);
    authService.login({
      data: { name: '', password: '' },
      error: () => {},
      next: (res) => {
        expect(res).toBeTruthy();
      },
    });
    const request = httpMock.expectOne('http://localhost:8080/auth/login');
    expect(request.request.headers.has('Authorization')).toBeTrue();
    expect(request.request.headers.has('Content-Type')).toBeTrue();
    expect(request.request.headers.has('Accept')).toBeTrue();
    expect(request.request.headers.get('Content-Type')).toEqual(
      'application/json'
    );
    expect(request.request.headers.get('Accept')).toEqual('application/json');
    expect(request.request.headers.get('Authorization')).toEqual(
      'bearer ' + token
    );
  });
});
