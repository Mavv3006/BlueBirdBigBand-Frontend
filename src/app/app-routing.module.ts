import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConcertsPageComponent } from './pages/concerts-page/concerts-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { LegalNotesComponent } from './pages/legal-notes/legal-notes.component';
import { MusiciansComponent } from './pages/musicians/musicians.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
  {
    path: 'impressum',
    component: LegalNotesComponent,
  },
  {
    path: 'musiker',
    component: MusiciansComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'auftritte',
    component: ConcertsPageComponent,
  },
  {
    path: 'anfahrt',
    component: JourneyComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
