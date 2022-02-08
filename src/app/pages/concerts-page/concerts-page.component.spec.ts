import { Concert } from '../../models/concert';
import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { ConcertsPageComponent } from './concerts-page.component';
import { ConcertService } from '../../services/concert.service';
import { Title } from '@angular/platform-browser';

class MockTitleService {
  setTitle(title: string): void {
    console.info('Title has been set to: ' + title);
  }
}

class MockConcertService {
  upcoming(): Observable<Concert[]> {
    return of([
      {
        date: 'date',
        start_time: 'start_time',
        end_time: 'end_time',
        band_name: 'band_name',
        location: {
          street: 'street',
          number: 'number',
          plz: 12,
          name: 'name',
        },
        descriptions: {
          organizer: 'organizer',
          place: 'place',
        },
      },
    ]);
  }
}

describe('ConcertsPageComponent', () => {
  let component: ConcertsPageComponent;
  let concertService: ConcertService;
  let titleService: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConcertsPageComponent,
        { provide: ConcertService, useClass: MockConcertService },
        { provide: Title, useclass: MockTitleService },
      ],
    });
    component = TestBed.inject(ConcertsPageComponent);
    concertService = TestBed.inject(ConcertService);
    titleService = TestBed.inject(Title);
  });

  it('should save concerts to local storage', () => {});

  it('should parse concerts from local storage', () => {});

  it('should end the spinner when there are concerts in local storage', () => {});

  it('should update the ui and local storage when the api returns different values then currently in local storage', () => {});
});
