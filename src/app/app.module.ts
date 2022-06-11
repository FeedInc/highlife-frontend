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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LogoHighlifeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LayoutModule,
    MatListModule,
    FlexLayoutModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
