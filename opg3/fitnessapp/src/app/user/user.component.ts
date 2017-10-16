import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Users: User[];
  constructor(private userService: UserService) { }

  getUser(){
    this.userService.getUser().then( Users => this.Users = Users );
  }

  createWorkout(user: User) {
    this.userService.createUser(user).then(Users => {
        this.Users.push(Users);
      });
  }
  ngOnInit() {
  }

}
