import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';

const components = [HeaderComponent, MainComponent, NavbarComponent];

@NgModule({
  imports: [MatMenuModule, AppRoutingModule],
  declarations: components,
  exports: components,
})
export class LayoutModule {}
