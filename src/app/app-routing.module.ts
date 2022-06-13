import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { HomeComponent } from "./views/home/home.component"
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {StudentProfileComponent} from "./views/student-profile/student-profile.component";
import {CreateTournamentsComponent} from "./views/create-tournaments/create-tournaments.component";


const routes: Routes = [
  {
    pathMatch:"full",
    path:"",
    redirectTo:"home"
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"sign-up", component:RegisterComponent},
  { path: "student/:studentId", component: StudentProfileComponent },
  { path: "new-tournament", component: CreateTournamentsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
