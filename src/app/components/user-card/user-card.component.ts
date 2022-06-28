import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/IUser';
import { UsersApiService } from '../../services/users/users-api.service';
import {Router} from "@angular/router";
import { Location } from '@angular/common'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  usersArray: IUser[];

  constructor(private router: Router ,private UsersApiService: UsersApiService) {
    this.usersArray = [];
  }
  getUsers() {
    this.UsersApiService.getAllUsers().subscribe((response: any=[]) => {
      this.usersArray = response;
    });
  }
  goToUser(user: any){
    this.router.navigate(['student/',user])
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
