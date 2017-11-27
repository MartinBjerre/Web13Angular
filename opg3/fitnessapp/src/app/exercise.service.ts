import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Exercise} from './models/exercise';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExerciseService {

  private url = 'http://localhost:3000/api/user/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getExercise(userId: string, workoutId: string): Promise<Exercise[]> {
    return this.http.get(this.url + `${userId}/workout/${workoutId}/exercise`)
      .toPromise()
      .then(response => response.json() as Exercise[]);
  }

  createExercise(UserId: string, workoutId: string, exerciseName: String, exerciseDescription: String,
                 exerciseSets: Number, exerciseRepstime: Number): Promise<Exercise> {
    return this.http.post(this.url + `${UserId}/workout/${workoutId}/exercise/CreateExercise`,
      JSON.stringify( {userId: UserId, workoutId: workoutId, ExerciseName: exerciseName, ExerciseDescription: exerciseDescription,
      ExerciseSets: exerciseSets, ExerciseRepstime: exerciseRepstime }), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo purpose only
    return Promise.reject(error.message || error);
  }
}
