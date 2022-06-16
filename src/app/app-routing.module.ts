import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { HomeComponent } from "./views/home/home.component"
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {StudentProfileComponent} from "./views/student-profile/student-profile.component";
import {CreateTournamentsComponent} from "./views/create-tournaments/create-tournaments.component";
import {GamesComponent} from "./views/games/games.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    pathMatch:"full",
    path:"",
    redirectTo:"/"
  },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"sign-up", component:RegisterComponent},
  { path: "student/:studentId", component: StudentProfileComponent },
  { path: "new-tournament", component: CreateTournamentsComponent },
  { path: "portal/:gameId", component: GamesComponent },
  { path:"**", component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
