import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import {
  Email,
  EmailGroup,
  EmailService,
} from 'src/app/services/email/email.service';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';
import { EmailComponent } from './email.component';

class MockEmailService {
  get(): Observable<EmailGroup[]> {
    return of(mockEmails);
  }
}

const mockEmails: EmailGroup[] = [
  {
    emails: [{ email: 'email', name: 'name' }],
    name: 'test',
  },
];

describe('EmailComponent', () => {
  let component: EmailComponent;
  let emailService: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmailComponent,
        { provide: EmailService, useClass: MockEmailService },
      ],
    });
    component = TestBed.inject(EmailComponent);
    emailService = TestBed.inject(EmailService);
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(emailService).toBeTruthy();
  });

  it('should store emails in local storage', () => {
    component.ngOnInit();

    expect(window.localStorage.getItem(LocalStorageKey.email)).not.toBeNull();
    expect(window.localStorage.getItem(LocalStorageKey.email)).toEqual(
      JSON.stringify(mockEmails)
    );
  });

  it('should update emails after api call', () => {
    expect(component.email).toBeUndefined();

    component.ngOnInit();

    expect(component.email).toEqual(mockEmails);
  });
});
