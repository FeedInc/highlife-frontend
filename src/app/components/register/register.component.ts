import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    email:'',
    password:''
  }

  constructor(private authService: AuthService) {

  }

  signUp(){
    console.log(this.user)
    const{email,password}=this.user
    this.authService.register(email,password).then(res=>{
      console.log("se registro: ",res);
    })
  }

  ngOnInit(): void {
  }

}
