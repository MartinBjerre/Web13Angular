import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Exercise} from './models/exercise';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExerciseService {

  private url = 'http://localhost:3000/api/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getExercise(userId: string, workoutId: string): Promise<Exercise[]> {
    return this.http.get(this.url + `${userId}/workouts/${workoutId}/exercise`)
      .toPromise()
      .then(response => response.json().data as Exercise[]);
  }

  createExercise(userId: string, workoutId: string, exercise: Exercise): Promise<Exercise> {
    return this.http.post(this.url + `${userId}/workouts${workoutId}/exercise`, JSON.stringify(exercise), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Exercise);
  }

}
