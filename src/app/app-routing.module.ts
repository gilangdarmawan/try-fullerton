import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullertonComponent } from './fullerton/fullerton.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CeoMessageComponent } from './about/ceo-message/ceo-message.component';
import { FullertonEdgeComponent } from './about/fullerton-edge/fullerton-edge.component';
import { AwardComponent } from './about/award/award.component';
import { SponsorshipComponent } from './about/sponsorship/sponsorship.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CareerComponent } from './about/career/career.component';
import { FoundationComponent } from './about/foundation/foundation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fullerton',
    component: FullertonComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ceo-message',
    component: CeoMessageComponent
  },
  {
    path: 'fullerton-edge',
    component: FullertonEdgeComponent
  },
  {
    path: 'our-awards',
    component: AwardComponent
  },
  {
    path: 'sponsorship',
    component: SponsorshipComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'csr',
    component: FoundationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
