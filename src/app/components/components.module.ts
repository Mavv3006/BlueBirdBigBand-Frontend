import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HeadingComponent } from './heading/heading.component';
import { NgModule } from '@angular/core';
import { SecurityModule } from '../security/security.module';

const components = [HeadingComponent, AudioPlayerComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [SecurityModule, CommonModule, MatDialogModule],
})
export class ComponentsModule {}
