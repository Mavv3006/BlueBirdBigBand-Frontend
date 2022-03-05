import { TokenService } from './../token/token.service';
import { environment } from './../../../environments/environment';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService, LoginResponse } from './auth.service';
import { AuthInterceptor } from './../../security/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        TokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(AuthService);
    tokenService = TestBed.inject(TokenService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in', () => {
    // Setup
    const username = 'test';
    const password = 'test';
    const token = 'jwt token';
    const authenticationResponse = {
      access_token: token,
      token_type: 'string',
      expires: {
        in: 0,
        at: 0,
      },
    };

    // Executing
    service.login({
      data: { name: username, password: password },
      next: (value: LoginResponse) => {
        expect(value).toEqual(authenticationResponse);
      },
      error: () => {
        expect().nothing();
      },
    });
    let req = httpMock.expectOne(
      environment.base_url + environment.urls.auth.login
    );

    // Validation
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      name: username,
      password: password,
    });
    req.flush(authenticationResponse);
    expect(tokenService.getToken()).toEqual(token);
    service.isLoggedIn.subscribe({
      next: (value: boolean) => {
        expect(value).toBeTrue();
      },
    });
  });

  it('should log out', () => {
    // Setup
    const authToken = 't.c.t';
    const authHeader = 'bearer ' + authToken;
    const authenticationResponse = {
      access_token: authToken,
      token_type: 'string',
      expires: {
        in: 0,
        at: 0,
      },
    };
    service.login({
      data: { name: 'test', password: 'test' },
      next: (value: LoginResponse) => {
        expect(value).toEqual(authenticationResponse);
      },
      error: () => {
        expect().nothing();
      },
    });
    httpMock
      .expectOne(environment.base_url + environment.urls.auth.login)
      .flush(authenticationResponse);
    expect(tokenService.getToken()).not.toBeNull();

    // Executing
    service.logout({ next: () => {}, error: () => {} });
    const req = httpMock.expectOne(
      environment.base_url + environment.urls.auth.logout,
      'request to logout route'
    );
    req.flush({
      message: 'logout successful',
    });

    // Validation
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toEqual(authHeader);
  });
});
