import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  template: `<audio [attr.src]="url | secure | async" controls></audio>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerComponent {
  @Input()
  url = '';
}
