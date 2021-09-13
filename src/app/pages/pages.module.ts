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

@NgModule({
  declarations: [
    HomeComponent,
    ConcertsPageComponent,
    ContactPageComponent,
    MusiciansComponent,
    JourneyComponent,
    AboutUsComponent,
    LegalNotesComponent,
    PageNotFoundComponent,
    ConcertComponent,
    BookingComponent,
    ContactComponent,
    BandleaderComponent,
    ManagementComponent,
    WebadminComponent,
    PressComponent,
  ],
  imports: [CommonModule, MatProgressSpinnerModule, ComponentsModule],
})
export class PagesModule {}
