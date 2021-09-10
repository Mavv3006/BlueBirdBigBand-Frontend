import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { JourneyComponent } from './journey/journey.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LegalNotesComponent } from './legal-notes/legal-notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConcertsPageComponent } from './concerts-page/concerts-page.component';
import { ConcertComponent } from './concerts-page/concert/concert.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent,
    ConcertsPageComponent,
    ContactComponent,
    MusiciansComponent,
    JourneyComponent,
    AboutUsComponent,
    LegalNotesComponent,
    PageNotFoundComponent,
    ConcertComponent,
  ],
  imports: [CommonModule, MatProgressSpinnerModule, ComponentsModule],
})
export class PagesModule {}
