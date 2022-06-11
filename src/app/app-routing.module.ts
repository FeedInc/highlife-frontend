import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { HomeComponent } from "./views/home/home.component"
import {LoginComponent} from "./views/login/login.component";


const routes: Routes = [
  {
    pathMatch:"full",
    path:"",
    redirectTo:"home"
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
