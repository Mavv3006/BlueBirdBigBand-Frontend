import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertRecordingsComponent } from './concert-recordings.component';

describe('ConcertRecordingsComponent', () => {
  let component: ConcertRecordingsComponent;
  let fixture: ComponentFixture<ConcertRecordingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcertRecordingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertRecordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
