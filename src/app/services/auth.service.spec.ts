import { TokenService } from './token.service';
import { environment } from './../../environments/environment.prod';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('AuthService', () => {
  // let service: AuthService;
  // let httpMock: HttpTestingController;
  // let tokenService: TokenService;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule],
  //     providers: [
  //       AuthService,
  //       TokenService,
  //       {
  //         provide: HTTP_INTERCEPTORS,
  //         useClass: AuthInterceptor,
  //         multi: true,
  //       },
  //     ],
  //   });
  //   service = TestBed.inject(AuthService);
  //   tokenService = TestBed.inject(TokenService);
  //   httpMock = TestBed.inject(HttpTestingController);
  // });
  // afterEach(() => {
  //   httpMock.verify();
  // });
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  // it('should log in', () => {
  //   // Setup
  //   const username = 'test';
  //   const password = 'test';
  //   const token = 'jwt token';
  //   // Executing
  //   service.login(username, password);
  //   const req = httpMock.expectOne(environment.urls.auth.login);
  //   req.flush({
  //     access_token: token,
  //     token_type: 'string',
  //     expires: {
  //       in: 0,
  //       at: 0,
  //     },
  //   });
  //   // Validation
  //   expect(req.request.method).toBe('POST');
  //   expect(req.request.body).toEqual({
  //     name: username,
  //     password: password,
  //   });
  //   expect(tokenService.getToken()).toEqual(token);
  //   expect(service.isLoggedIn()).toBeTrue();
  // });
  // it('should log out', () => {
  //   // Setup
  //   const authToken = 't.c.t';
  //   const authHeader = 'Bearer: ' + authToken;
  //   service.login('test', 'test');
  //   httpMock
  //     .expectOne(environment.urls.auth.login, 'request to login route')
  //     .flush({
  //       access_token: authToken,
  //       token_type: 'string',
  //       expires: {
  //         in: 0,
  //         at: 0,
  //       },
  //     });
  //   console.log('token: ' + tokenService.getToken());
  //   // Executing
  //   service.logout();
  //   const req = httpMock.expectOne(
  //     environment.urls.auth.logout,
  //     'request to logout route'
  //   );
  //   req.flush({
  //     message: 'logout successful',
  //   });
  //   // Validation
  //   expect(req.request.method).toBe('GET');
  //   expect(req.request.headers.get('Authorization')).toEqual(authHeader);
  // });
});
