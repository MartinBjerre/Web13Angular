import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {User} from "./models/user";

@Injectable()
export class UserService {

  private url  = 'http://localhost:3000/api/';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getUser(): Promise<User[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json(). data as User[]);
  }
  createUser(user: User): Promise<User> {
      
      return this.http.post(this.url +'user/CreateUser', JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user);
  }
  
}

