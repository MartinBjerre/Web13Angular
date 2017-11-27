import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


import 'rxjs/add/operator/toPromise';
import {User} from './models/user';

@Injectable()
export class UserService {

  private url  = 'http://localhost:3000/api/user';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getUser(): Promise<User[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  createUser(userName: string): Promise<User> {
      console.log(userName);
      return this.http.post(this.url + '/CreateUser', JSON.stringify({UserName: userName, workouts: []}), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); //demo purpose only
      return Promise.reject(error.message || error);
  }
}

