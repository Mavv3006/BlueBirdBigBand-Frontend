import { LocalStorageKey } from '../../storage/local-storage-keys';
import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';
describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    service = TestBed.inject(TokenService);
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set token', () => {
    const test_token = 'bla bla';

    service.setToken(test_token);

    expect(window.localStorage.getItem(LocalStorageKey.jwt)).toEqual(
      test_token
    );
  });

  it('should retrieve the token', () => {
    const test_token = 'bla bla';
    window.localStorage.setItem(LocalStorageKey.jwt, test_token);

    const token = service.getToken();

    expect(token).not.toBeNull();
    expect(token).toEqual(test_token);
  });

  it('should return null when no token is set', () => {
    expect(window.localStorage.getItem(LocalStorageKey.jwt)).toBeNull();
    expect(service.getToken()).toBeNull();
  });

  it('should remove tokens', () => {
    const token = 'token';
    const exp_date = 1235629842193467;
    window.localStorage.setItem(LocalStorageKey.jwt, token);
    window.localStorage.setItem(
      LocalStorageKey.expire_date_time,
      exp_date.toString()
    );
    expect(window.localStorage.getItem(LocalStorageKey.jwt)).not.toBeNull();
    expect(
      window.localStorage.getItem(LocalStorageKey.expire_date_time)
    ).not.toBeNull();

    service.clear();

    expect(window.localStorage.getItem(LocalStorageKey.jwt)).toBeNull();
    expect(
      window.localStorage.getItem(LocalStorageKey.expire_date_time)
    ).toBeNull();
  });

  it('should set exp_date_time', () => {
    const exp_date = 1235629842193467;
    expect(
      window.localStorage.getItem(LocalStorageKey.expire_date_time)
    ).toBeNull();

    service.setExpireDateTime(exp_date);

    expect(
      window.localStorage.getItem(LocalStorageKey.expire_date_time)
    ).not.toBeNull();
    expect(
      window.localStorage.getItem(LocalStorageKey.expire_date_time)
    ).toEqual(exp_date.toString());
  });

  it('should retrieve exp date time', () => {
    const exp_date = new Date('December 17, 2010 03:24:00');
    const milliseconds = exp_date.getTime();
    window.localStorage.setItem(
      LocalStorageKey.expire_date_time,
      (milliseconds / 1000).toString()
    );

    const response = service.getExpireDateTime();

    expect(response).not.toBeNull();
    expect(response!.getTime()).toEqual(milliseconds);
    expect(response!.toString()).toEqual(exp_date.toString());
    expect(response).toEqual(exp_date);
  });

  it('should return null when no exp date time is set', () => {
    expect(
      window.localStorage.getItem(LocalStorageKey.expire_date_time)
    ).toBeNull();
    expect(service.getToken()).toBeNull();
  });
});
