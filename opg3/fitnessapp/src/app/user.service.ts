
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {User} from "./models/user";

@Injectable()
export class UserService {

  private url  = 'http://localhost:3000/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getUser(): Promise<any[]> {
      return this.http.get(`${this.url}/user/`)
          
      .toPromise()
          .then(response => response.json());
          
  }

  getSpecificUser(id: string): Promise<User> {
      const url = `${this.url}/user/${id}`;
      return this.http.get(url).toPromise().then(response => response.json().data as User);

  }
  createUser(userName: string): Promise<User> {
      const url = `${this.url}/user/CreateUser`;
      return this.http.post(url, JSON.stringify({UserName: userName}), { headers: this.headers })
      .toPromise()
          .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); //demo purpose only
      return Promise.reject(error.message || error);
  }
}

