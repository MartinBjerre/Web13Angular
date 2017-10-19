import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  getUser(){
    this.userService.getUser().then( users => this.users = users );
  }

  createWorkout(userName: string) {
      //const u: User = {
      //    name: userName,
      //    workouts: []
      //};
      this.userService.createUser(userName).then(user => {
          console.log(user);
        this.users.push(user);
      });
  }
  
  ngOnInit() {
      this.getUser();
  }

}
