import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  user: User[];

  createUser(userName: string): void {
    console.log(userName);
    this.userService.createUser(userName);
  }

  ngOnInit() {

  }
}
