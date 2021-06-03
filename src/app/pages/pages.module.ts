import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { ContactComponent } from './contact/contact.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { JourneyComponent } from './journey/journey.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LegalNotesComponent } from './legal-notes/legal-notes.component';



@NgModule({
  declarations: [
    HomeComponent,
    ConcertsComponent,
    ContactComponent,
    MusiciansComponent,
    JourneyComponent,
    AboutUsComponent,
    LegalNotesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
