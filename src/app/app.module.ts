import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AirlineComponent } from './airline/airline.component';
import { AirlinelistComponent } from './airlinelist/airlinelist.component';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AirlinedetailsComponent } from './airlinedetails/airlinedetails.component';
import { AirlineService } from './airline.service';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './logged-in.guard';
import { AUTH_PROVIDERS } from './auth.service';
import { UserService } from './user.service';
import { AdminGuard } from './admin.guard';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Top10ThisYearComponent } from './top10-this-year/top10-this-year.component';
import { Top10AllTimeComponent } from './top10-all-time/top10-all-time.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'top10now', component: Top10ThisYearComponent },
  { path: 'top10', component: Top10AllTimeComponent },
  //{ path: 'admin', component: AdminComponent },
  { path: 'airline/:id', component: AirlinedetailsComponent },
  { path: 'add-airline', component: AddAirlineComponent },

  // authentication demo
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoggedInGuard, AdminGuard]
  },
];



@NgModule({
  declarations: [
    AppComponent,
    AirlineComponent,
    AirlinelistComponent,
    AdminComponent,
    HomeComponent,
    AirlinedetailsComponent,
    AddAirlineComponent,
    StarRatingComponent,
    RegisterComponent,
    LoginComponent,
    TimeAgoPipe,
    FileSelectDirective,
    Top10ThisYearComponent,
    Top10AllTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    AirlineService,
    AUTH_PROVIDERS,
    LoggedInGuard,
    AdminGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
