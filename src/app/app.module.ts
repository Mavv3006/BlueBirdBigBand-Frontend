import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    HttpClientModule,
    PagesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
