import { TokenService } from './../services/token.service';
import { CoreService } from './../services/core.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let injector: TestBed;
  let service: CoreService;
  let tokenService: TokenService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        CoreService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    injector = getTestBed();
    service = injector.inject(CoreService);
    tokenService = injector.inject(TokenService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should add token to http header', () => {
    const token = 'test';
    tokenService.setToken(token);
    service.get('/users').subscribe((res) => {
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
      'Bearer: ' + token
    );
  });
});
