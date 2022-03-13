import { SongPlayingDialogComponent } from './../../../components/song-playing-dialog/song-playing-dialog.component';
import { LocalStorageKey } from './../../../storage/local-storage-keys';
import { Song, SongsService } from '../../../services/songs/songs.service';
import { FileDownloadService } from './../../../services/file-download/file-download.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SongDataSource } from './song-data-source';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  private dataSource = new SongDataSource([]);
  private currentlyClickedSong: Song | null = null;

  columns = ['title', 'arranger', 'author', 'genre', 'actions'];

  get songs() {
    return this.dataSource;
  }

  @ViewChild(MatTable)
  table?: MatTable<Song>;

  constructor(
    private songsService: SongsService,
    private fileDownloadService: FileDownloadService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (window.localStorage.getItem(LocalStorageKey.songs) !== null) {
      this.setSongs(
        JSON.parse(window.localStorage.getItem(LocalStorageKey.songs)!)
      );
    }

    this.songsService.get().subscribe(
      (res: Song[]) => {
        this.setSongs(res);
        window.localStorage.setItem(LocalStorageKey.songs, JSON.stringify(res));
      },
      (error) => {
        console.error('[EmailComponent]', error);
      }
    );
  }

  setSongs(new_songs: Song[]) {
    this.dataSource.setData(new_songs);
    this.table?.renderRows();
  }

  songActionsClicked(song: Song) {
    console.info(`song action clicked for song "${song.title}"`);
    this.currentlyClickedSong = song;
  }

  downloadActionClicked() {
    if (this.currentlyClickedSong == null) {
      console.error('no song selected. Downloading not available.');
      return;
    }
    this.fileDownloadService.downloadAndSave(
      this.currentlyClickedSong.file_name,
      'song'
    );
  }

  playActionClicked() {
    if (this.currentlyClickedSong == null) {
      console.error('no song selected. Playing not available.');
      return;
    }
    // TODO: start playing song
    const dialogRef = this.dialog.open(SongPlayingDialogComponent, {
      width: '400px',
      data: { url: '', song: this.currentlyClickedSong },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog has been closed');
    });
  }
}
