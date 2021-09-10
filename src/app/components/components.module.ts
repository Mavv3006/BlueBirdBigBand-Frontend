import { HeadingComponent } from './heading/heading.component';
import { NgModule } from '@angular/core';

const components = [HeadingComponent];

@NgModule({
  declarations: components,
  exports: components,
})
export class ComponentsModule {}
