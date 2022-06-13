import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './components/nav-bar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LogoHighlifeComponent} from "./components/logo-highlife/logo-highlife.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from "./components/register/register.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { StudentProfileComponent } from './views/student-profile/student-profile.component';
import {ProfileDescriptionComponent} from "./components/profile-description/profile-description.component";
import {AppChartDynamicComponent} from "./components/app-chart-dynamic/app-chart-dynamic.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import { CreateTournamentsComponent } from './views/create-tournaments/create-tournaments.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {TournamentsService} from "./services/tournaments/tournaments.service";
import {MatSortModule} from "@angular/material/sort";
import { TournamentCardComponent } from './components/tournament-card/tournament-card.component';
import { GamesCardComponent } from './components/games-card/games-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LogoHighlifeComponent,
    StudentProfileComponent,
    ProfileDescriptionComponent,
    AppChartDynamicComponent,
    CreateTournamentsComponent,
    TournamentCardComponent,
    GamesCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatGridListModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        LayoutModule,
        MatListModule,
        FlexLayoutModule,
        NgbModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MatPaginatorModule,
        MatSortModule,

    ],
  providers: [TournamentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
