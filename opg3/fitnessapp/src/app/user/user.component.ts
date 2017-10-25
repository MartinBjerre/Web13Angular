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
  constructor(private userService: UserService) {
      this.users = new Array<User>();
  }

  getUser(): void{
      this.userService.getUser().then(user => this.users = user);
  }

  createWorkoutUser(userName: string): void {
      //const u: User = {
      //    name: userName,
      //    workouts: []
      //};
      if (!userName) { return; }
      
      this.userService.createUser(userName);
      
  }
  
  ngOnInit():void {
      this.getUser();
  }

}
