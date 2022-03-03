import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {
  Song,
  songsDevData,
  SongsService,
} from 'src/app/services/songs.service';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  private _songs: Song[] = [];

  columns: string[] = ['title', 'genre', 'author', 'arranger'];

  set songs(new_songs) {
    this._songs = new_songs;
    this.table?.renderRows();
  }
  get songs(): Song[] {
    return this._songs;
  }

  @ViewChild(MatTable)
  table?: MatTable<Song>;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    if (window.localStorage.getItem(LocalStorageKey.songs) !== null) {
      this.songs = JSON.parse(
        window.localStorage.getItem(LocalStorageKey.songs)!
      );
    }

    this.songsService.get().subscribe(
      (res: Song[]) => {
        this.songs = res;
        window.localStorage.setItem(LocalStorageKey.songs, JSON.stringify(res));
      },
      (error) => {
        console.error('[EmailComponent]', error);
      }
    );
  }
}
