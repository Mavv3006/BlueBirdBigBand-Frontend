import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { Song, SongsService } from 'src/app/services/songs.service';
import { LocalStorageKey } from 'src/app/storage/local-storage-keys';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  private dataSource = new SongDataSource([]);

  columns: string[] = ['title', 'genre', 'author', 'arranger'];

  get songs() {
    return this.dataSource;
  }

  @ViewChild(MatTable)
  table?: MatTable<Song>;

  constructor(private songsService: SongsService) {}

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
}

class SongDataSource extends DataSource<Song> {
  private _dataStream = new ReplaySubject<Song[]>();

  constructor(initialData: Song[]) {
    super();
    this.setData(initialData);
  }

  connect(_collectionViewer: CollectionViewer): Observable<readonly Song[]> {
    return this._dataStream;
  }

  disconnect(_collectionViewer: CollectionViewer): void {}

  setData(data: Song[]) {
    this._dataStream.next(data);
  }
}
