import { FileDownloadService } from './../../services/file-download/file-download.service';
import { Song } from './../../services/songs/songs.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SongPlayingDialogData {
  url: string;
  song: Song;
}

@Component({
  templateUrl: './song-playing-dialog.component.html',
  styleUrls: ['./song-playing-dialog.component.scss'],
})
export class SongPlayingDialogComponent {
  song_url: string;

  constructor(
    public dialogRef: MatDialogRef<SongPlayingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SongPlayingDialogData
  ) {
    this.song_url = FileDownloadService.getDownloadUrl(
      this.data.song.file_name,
      'song'
    );
  }

  onOkClick() {
    this.dialogRef.close();
  }
}
