import { TokenService } from '../../services/token/token.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let injector: TestBed;
  let tokenService: TokenService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    injector = getTestBed();
    tokenService = injector.inject(TokenService);
    httpMock = injector.inject(HttpTestingController);
    httpClient = injector.inject(HttpClient);
  });

  it('should add token to http header', () => {
    const token = 'test';
    tokenService.setToken(token);
    httpClient.get('/users').subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const request = httpMock.expectOne('/users');
    expect(request.request.headers.has('Authorization')).toBeTrue();
    expect(request.request.headers.has('Content-Type')).toBeTrue();
    expect(request.request.headers.has('Accept')).toBeTrue();
    expect(request.request.headers.get('Content-Type')).toEqual(
      'application/json'
    );
    expect(request.request.headers.get('Accept')).toEqual('application/json');
    expect(request.request.headers.get('Authorization')).toEqual(
      'Bearer ' + token
    );
  });
});
