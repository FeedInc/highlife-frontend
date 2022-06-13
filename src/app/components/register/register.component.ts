import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/firebase-auth/auth.service";
import {UsersApiService} from "../../services/users/users-api.service";
import {Users} from "../../models/users";
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router";



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
  userData!: Users;
  @ViewChild("userForm", { static: false }) userForm!: NgForm;

  constructor( private serviceUser: UsersApiService,private authService: AuthService,public router: Router) {

    this.userData = {} as Users

  }

  signUp(){
    console.log(this.user)
    const{email,password}=this.user
    this.authService.register(email, password).then(res=>{
      console.log("se registro: ",res);
    })
  }
  addUser(): void {
    const newUser = {firstName: this.userData.firstName,lastName: this.userData.lastName, nickName: this.userData.nickName, email: this.user.email}
    this.serviceUser.addUsers(newUser).subscribe(() => {
    });
  }

  onSubmit() {
    if(this.userForm.form.valid) {
      this.addUser()
      this.signUp()
    }else {
      console.log("Invalid data!")
    }
  }
  ngOnInit(): void {
  }

}
