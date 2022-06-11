import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { HomeComponent } from "./views/home/home.component"
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";


const routes: Routes = [
  {
    pathMatch:"full",
    path:"",
    redirectTo:"home"
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"sign-up", component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
