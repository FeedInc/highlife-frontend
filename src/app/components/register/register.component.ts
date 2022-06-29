import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/firebase-auth/auth.service';
import { UsersApiService } from '../../services/users/users-api.service';
import { IUser } from '../../models/IUser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  userData!: IUser;
  @ViewChild('userForm', { static: false }) userForm!: NgForm;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'nickName',
    'email',
    'password',
    'urlToImage',
  ];

  constructor(
    private usersApiService: UsersApiService,
    private authService: AuthService,
    public router: Router
  ) {
    this.userData = {} as IUser;
  }

  signUp() {
    console.log(this.user);
    const { email, password } = this.user;
    this.authService.register(email, password).then((res) => {
      console.log('se registro: ', res);
    });
  }
  // addUser(): void {
  //   const newUser = {
  //     id: this.userData.id,
  //     firstName: this.userData.firstName,
  //     lastName: this.userData.lastName,
  //     nickName: this.userData.nickName,
  //     email: this.user.email,
  //     password:this.user.password,
  //     urlToImage: "https://www.beatstars.com/assets/img/placeholders/default-avatar-circle.svg",
  //   };
  // }
  addStudent() {
    this.userData.id = 0;
    this.userData.email = this.user.email;
    this.userData.password = this.user.password;
    this.userData.urlToImage =
      'https://www.beatstars.com/assets/img/placeholders/default-avatar-circle.svg';
    this.usersApiService
      .createUser(this.userData)
      .subscribe((response: any) => {});
  }

  onSubmit() {
    if (this.userForm.form.valid) {
      this.addStudent();
      // this.signUp();
    } else {
      console.log('Invalid data!');
    }
  }
  ngOnInit(): void {}
}
