import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Workout} from './models/workout';

@Injectable()
export class WorkoutService {

  private url  = 'http://localhost:4200/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {  }

  getWorkout(userId: string): Promise<Workout[]> {
    return this.http.get(this.url + `/${userId}/workouts`)
      .toPromise()
      .then(response => response.json(). data as Workout[]);
  }
  createWorkout(userId: string, workout: Workout): Promise<Workout> {
    return this.http.post(this.url + `/${userId}/workouts`, JSON.stringify(workout), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Workout);
  }
}
