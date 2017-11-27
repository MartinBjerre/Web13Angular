import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Workout} from './models/workout';

@Injectable()
export class WorkoutService {

  private url  = 'http://localhost:3000/api/user/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {  }

  getWorkout(userId: string): Promise<Workout[]> {
    return this.http.get(this.url + `${userId}/workout`)
      .toPromise()
      .then(response => response.json() as Workout[]);
  }
    //skal tilrettes, så det kan modtag information og indsæt det der, det skal også opdaters i exercise når det er gjort skulle det gerne virke.
  createWorkoutService(userId: string, Wname: string, Wdescription: string): Promise<Workout> {
    return this.http.post(this.url + `${userId}/workout/CreateWorkout`,
      JSON.stringify({WorkoutName: Wname, WorkoutDescription: Wdescription, exercise: []}), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo purpose only
    return Promise.reject(error.message || error);
  }
}
