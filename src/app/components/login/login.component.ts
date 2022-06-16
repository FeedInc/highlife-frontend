import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/firebase-auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user ={
    email:'',
    password:''
  }

  constructor(private authService: AuthService, private router: Router) {

  }

  loginWithEmail(){
    console.log(this.user)
    const{email,password}=this.user
    this.authService.login(email,password).then(res=>{
      console.log("se registro: ",res);
      this.router.navigate([''])
    })
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle().then(res=>{
      console.log("se registro: ",res);
      this.router.navigate([''])
    })
  }

  ngOnInit(): void {
  }

}
