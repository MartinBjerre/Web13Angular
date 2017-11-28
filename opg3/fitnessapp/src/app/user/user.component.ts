import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit, OnChanges {

  constructor(private userService: UserService, private data: DataService, private router: Router) {
  }

  user: User[];

  CreateUser(userName: string): void {
    this.userService.createUser(userName);
    this.getUser();
  }
  RegisterUser(): void {
    this.router.navigate(['register']);
  }
  LoginUser(): void {
    this.router.navigate(['login']);
  }

  getUser(): void {
    this.userService.getUser().then(user => this.user = user);
  }
  LogOutUser() {
    this.userService.LogOut();
    console.log(this.userService.getToken());
  }

  InsertWorkout(id: string): void {
    this.data.changeMessage(id);
    this.router.navigate(['user/' + id + '/workout']);
  }

  ngOnInit() {
    this.getUser();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getUser();
  }
}
