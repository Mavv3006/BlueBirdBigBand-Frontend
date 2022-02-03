import { CommonModule } from '@angular/common';
import { DesktopNavbarComponent } from './navbar/desktop/desktop_navbar.component';
import { MobileNavbarComponent } from './navbar/mobile/mobile-navbar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarElementComponent } from './navbar/mobile/navbar-element/navbar-element.component';

const components = [
  HeaderComponent,
  MainComponent,
  DesktopNavbarComponent,
  MobileNavbarComponent,
  NavbarElementComponent,
];

@NgModule({
  imports: [
    MatMenuModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  declarations: components,
  exports: components,
})
export class LayoutModule {}
