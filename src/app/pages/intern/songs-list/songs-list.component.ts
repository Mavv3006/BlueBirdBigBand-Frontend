import { SongPlayingDialogComponent } from './../../../components/song-playing-dialog/song-playing-dialog.component';
import { LocalStorageKey } from './../../../storage/local-storage-keys';
import { Song, SongsService } from '../../../services/songs/songs.service';
import { FileDownloadService } from './../../../services/file-download/file-download.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  private _songs: Song[] = [];
  private currentlyClickedSong: Song | null = null;

  hasValues = false;
  hasError = false;

  columns = ['title', 'arranger', 'author', 'genre', 'actions'];

  get showSpinner(): boolean {
    return !this.hasValues && !this.hasError;
  }

  get showError(): boolean {
    return this.hasError;
  }

  get showValues(): boolean {
    return this.hasValues && this.values.length > 0 && !this.hasError;
  }

  get spinnerDiameter(): number {
    return 60;
  }

  get values(): Song[] {
    return this._songs;
  }

  @ViewChild(MatTable)
  table?: MatTable<Song>;

  constructor(
    private songsService: SongsService,
    private fileDownloadService: FileDownloadService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const storageSongs = this.getSongsFromStorage();
    if (storageSongs != null) {
      this.setSongs(storageSongs);
    }

    this.songsService.get().subscribe({
      next: (data: Song[]) => this.handleSongsFromApi(data),
      error: (error) => {
        console.error('[EmailComponent]', error);
        this.hasError = true;
      },
    });
  }

  setSongs(new_songs: Song[]): void {
    this._songs = new_songs;
    this.hasValues = true;
    this.table?.renderRows();
  }

  songActionsClicked(song: Song): void {
    console.info(`song action clicked for song "${song.title}"`);
    this.currentlyClickedSong = song;
  }

  downloadActionClicked(): void {
    if (this.currentlyClickedSong == null) {
      console.error('no song selected. Downloading not available.');
      return;
    }
    this.fileDownloadService.downloadAndSave(
      this.currentlyClickedSong.file_name,
      'song'
    );
  }

  playActionClicked(): void {
    if (this.currentlyClickedSong == null) {
      console.error('no song selected. Playing not available.');
      return;
    }
    const dialogRef = this.dialog.open(SongPlayingDialogComponent, {
      width: '400px',
      data: { url: '', song: this.currentlyClickedSong },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog has been closed');
    });
  }

  private handleSongsFromApi(data: Song[]): void {
    const storageSongs = this.getSongsFromStorage();
    let shouldUpdateSongs =
      storageSongs == null ||
      JSON.stringify(storageSongs) !== JSON.stringify(data);
    if (shouldUpdateSongs) {
      this.setSongs(data);
      window.localStorage.setItem(LocalStorageKey.songs, JSON.stringify(data));
    }
  }

  private getSongsFromStorage(): Song[] | null {
    const storageSongs = window.localStorage.getItem(LocalStorageKey.songs);
    if (storageSongs === null) {
      return null;
    }
    return JSON.parse(storageSongs);
  }
}
