import { AuthGuard } from './guards/Auth.guard';
import { EmailComponent } from './pages/intern/email/email.component';
import { BookingComponent } from './pages/booking/booking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConcertsPageComponent } from './pages/concerts-page/concerts-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { LegalNotesComponent } from './pages/legal-notes/legal-notes.component';
import { MusiciansComponent } from './pages/musicians/musicians.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PressComponent } from './pages/press/press.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { IndexComponent } from './pages/intern/index/index.component';
import { BbbbScheduleComponent } from './pages/intern/schedule/bbbb-schedule.component';
import { DtbScheduleComponent } from './pages/intern/schedule/dtb-schedule.component';
import { ConcertRecordingsComponent } from './pages/intern/concert-recordings/concert-recordings.component';
import { SongsListComponent } from './pages/intern/songs-list/songs-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'kontakt',
    component: ContactPageComponent,
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
    path: 'buchung',
    component: BookingComponent,
  },
  {
    path: 'presse',
    component: PressComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'intern',
    children: [
      {
        path: '',
        component: IndexComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'termine-bbbb',
        component: BbbbScheduleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'termine-dtb',
        component: DtbScheduleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'emails',
        component: EmailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'repertoire',
        component: SongsListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'downloads',
        component: ConcertRecordingsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthGuard],
      },
    ],
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
