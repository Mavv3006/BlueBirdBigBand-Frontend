import { Concert } from '../../models/concert';
import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { ConcertsPageComponent } from './concerts-page.component';
import { ConcertService } from '../../services/concert/concert.service';
import { Title } from '@angular/platform-browser';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

class MockTitleService {
  setTitle(title: string): void {
    console.info('Title has been set to: ' + title);
  }
}

class MockConcertService {
  upcoming(): Observable<Concert[]> {
    return of(mockConcerts);
  }
}

const mockConcerts: Concert[] = [
  {
    band_name: 'band name',
    date: 'test date',
    descriptions: {
      organizer: 'organizer description',
      place: 'place description',
    },
    end_time: 'end time',
    location: {
      name: 'location name',
      number: '12',
      plz: 12345,
      street: 'street',
    },
    start_time: 'start time',
  },
];
const mockConcertsString =
  '[{"band_name":"band name","date":"test date","descriptions":{"organizer":"organizer description","place":"place description"},"end_time":"end time","location":{"name":"location name","number":"12","plz":12345,"street":"street"},"start_time":"start time"}]';

describe('ConcertsPageComponent', () => {
  let component: ConcertsPageComponent;
  let concertService: ConcertService;
  let titleService: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConcertsPageComponent,
        { provide: ConcertService, useClass: MockConcertService },
        { provide: Title, useClass: MockTitleService },
      ],
    });
    component = TestBed.inject(ConcertsPageComponent);
    concertService = TestBed.inject(ConcertService);
    titleService = TestBed.inject(Title);
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(concertService).toBeTruthy();
    expect(titleService).toBeTruthy();
  });

  it('.getConcertsFromStorage should return null when there are no concerts in local storage', () => {
    expect(window.localStorage.getItem(LocalStorageKey.concerts)).toBeNull();
    expect(component.getConcertsFromStorage()).toBeNull();
  });

  it('should retrieve and parse concerts from local storage', () => {
    window.localStorage.setItem(LocalStorageKey.concerts, mockConcertsString);

    const concertsFromStorage = component.getConcertsFromStorage();
    expect(concertsFromStorage).not.toBeNull();
    expect(concertsFromStorage).toEqual(mockConcerts);
  });

  it('should end the spinner when there are concerts in local storage', () => {
    window.localStorage.setItem(
      LocalStorageKey.concerts,
      JSON.stringify(mockConcerts)
    );

    component.setConcertsFromLocalStorage();
    component.handleConcertsFromApi(mockConcerts);

    expect(component.hasValues).toBeTrue();
    expect(component.concerts).toEqual(mockConcerts);
  });

  it('should not update the ui when and local storage when the api returns the same values as currently in local storage', () => {
    window.localStorage.setItem(
      LocalStorageKey.concerts,
      JSON.stringify(mockConcerts)
    );
    const hasValues = component.hasValues;
    const concerts = component.concerts;

    component.handleConcertsFromApi(mockConcerts);

    expect(component.hasValues).toEqual(
      hasValues,
      `hasValues are different. expected: ${hasValues}, gotten: ${component.hasValues}`
    );
    expect(component.concerts).toEqual(
      concerts,
      `concerts are different. expected: ${concerts}, gotten: ${component.concerts}`
    );
  });

  it('should update the ui and local storage when the api returns different values then currently in local storage', () => {
    window.localStorage.setItem(LocalStorageKey.concerts, JSON.stringify([]));
    expect(component.hasValues).toBeFalse();
    expect(component.concerts).toEqual([]);

    component.setConcertsFromLocalStorage();
    component.handleConcertsFromApi(mockConcerts);

    expect(component.hasValues).toBeTrue();
    expect(component.concerts).toEqual(mockConcerts);
  });

  it('should update the ui when calling ngOnInit()', () => {
    window.localStorage.setItem(LocalStorageKey.concerts, JSON.stringify([]));
    expect(component.hasValues).toBeFalse();
    expect(component.concerts).toEqual([]);

    component.ngOnInit();

    expect(component.hasValues).toBeTrue();
    expect(component.concerts).toEqual(mockConcerts);
  });
});
