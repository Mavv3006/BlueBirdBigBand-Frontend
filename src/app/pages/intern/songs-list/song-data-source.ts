import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { ReplaySubject, Observable } from 'rxjs';
import { Song } from 'src/app/services/songs/songs.service';

export class SongDataSource extends DataSource<Song> {
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
