import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPlayingDialogComponent } from './song-playing-dialog.component';

describe('SongPlayingDialogComponent', () => {
  let component: SongPlayingDialogComponent;
  let fixture: ComponentFixture<SongPlayingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongPlayingDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongPlayingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
