import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { FullertonComponent } from './fullerton/fullerton.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CeoMessageComponent } from './about/ceo-message/ceo-message.component';
import { FullertonEdgeComponent } from './about/fullerton-edge/fullerton-edge.component';
import { AwardComponent } from './about/award/award.component';
import { SponsorshipComponent } from './about/sponsorship/sponsorship.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CareerComponent } from './about/career/career.component';
import { FoundationComponent } from './about/foundation/foundation.component';
import { SpreadTypesComponent } from './trade/spread-types/spread-types.component';
import { FundingWithdrawalComponent } from './trade/funding-withdrawal/funding-withdrawal.component';
import { CopyTradingComponent } from './trade/copy-trading/copy-trading.component';
import { IntroducingBrokerComponent } from './partnership/introducing-broker/introducing-broker.component';
import { MoneyManagerComponent } from './partnership/money-manager/money-manager.component';
import { WhiteLabelComponent } from './partnership/white-label/white-label.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullertonComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SettingComponent,
    NavbarComponent,
    FooterComponent,
    CeoMessageComponent,
    FullertonEdgeComponent,
    AwardComponent,
    SponsorshipComponent,
    PageNotFoundComponent,
    CareerComponent,
    FoundationComponent,
    SpreadTypesComponent,
    FundingWithdrawalComponent,
    CopyTradingComponent,
    IntroducingBrokerComponent,
    MoneyManagerComponent,
    WhiteLabelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
