import { TestBed } from '@angular/core/testing';

import { ConcertRecordingsService } from './concert-recordings.service';

describe('ConcertRecordingsService', () => {
  let service: ConcertRecordingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertRecordingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
