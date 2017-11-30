import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import {Exercise} from './models/exercise';
import {HttpHeaders, HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExerciseService {

  private url = 'http://localhost:3000/api/user/';
  //private headers = new Headers({'Authorization': this.getToken()});
  //private headers = new HttpHeaders({'Authorization': this.getToken()});

  constructor(private http: HttpClient) {
  }

  getExercise(userId: string, workoutId: string): Promise<Exercise[]> {
    return this.http.get(this.url + `${userId}/workout/${workoutId}/exercise`)
      .toPromise()
      .then(response => response as Exercise[]);
  }

  createExercise(UserId: string, workoutId: string, exerciseName: String, exerciseDescription: String,
                 exerciseSets: Number, exerciseRepstime: Number): Promise<Exercise> {
    const headers = new HttpHeaders().set('Authorization', this.getToken()); // setter authorization
    return this.http.post(this.url + `${UserId}/workout/${workoutId}/exercise/CreateExercise`,
      JSON.stringify( {userId: UserId, workoutId: workoutId, ExerciseName: exerciseName, ExerciseDescription: exerciseDescription,
      ExerciseSets: exerciseSets, ExerciseRepstime: exerciseRepstime }) ) //, {headers: headers})
      .toPromise()
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo purpose only
    return Promise.reject(error.message || error);
  }
  public getToken() {
    return localStorage.getItem('UserToken');
  }
}
