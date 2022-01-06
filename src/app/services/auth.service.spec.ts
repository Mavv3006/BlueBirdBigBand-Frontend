import { environment } from './../../environments/environment.prod';
import { inject, TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService, LoginResponse } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in', () => {
    const mockResponse: LoginResponse = {
      access_token: 'string',
      token_type: 'string',
      expires: {
        in: 0,
        at: 0,
      },
    };

    service.login('test', 'test').subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(environment.urls.auth.login);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
