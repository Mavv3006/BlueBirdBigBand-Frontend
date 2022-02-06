import { Title, BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { JourneyComponent } from './journey/journey.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LegalNotesComponent } from './legal-notes/legal-notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConcertsPageComponent } from './concerts-page/concerts-page.component';
import { ConcertComponent } from './concerts-page/concert/concert.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { BandleaderComponent } from './contact-page/contact/bandleader.component';
import { ManagementComponent } from './contact-page/contact/management.component';
import { WebadminComponent } from './contact-page/contact/webadmin.component';
import { PressComponent } from './press/press.component';
import { InstrumentListComponent } from './musicians/instrument-list/instrument-list.component';
import { LoginComponent } from './auth/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './intern/index/index.component';
import { BbbbScheduleComponent } from './intern/schedule/bbbb-schedule.component';
import { DtbScheduleComponent } from './intern/schedule/dtb-schedule.component';
import { EmailComponent } from './intern/email/email.component';
import { EmailGroupComponent } from './intern/email/email-group.component';

const components = [
  HomeComponent,
  ConcertsPageComponent,
  ContactPageComponent,
  MusiciansComponent,
  JourneyComponent,
  AboutUsComponent,
  LegalNotesComponent,
  PageNotFoundComponent,
  EmailComponent,
  EmailGroupComponent,
  ConcertComponent,
  BookingComponent,
  ContactComponent,
  BandleaderComponent,
  ManagementComponent,
  WebadminComponent,
  PressComponent,
  InstrumentListComponent,
  LoginComponent,
  IndexComponent,
  BbbbScheduleComponent,
  DtbScheduleComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  providers: [Title],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
})
export class PagesModule {}
