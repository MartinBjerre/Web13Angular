import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Workout} from './models/workout';
import {AuthorazationService} from './authorazation.service';



@Injectable()
export class WorkoutService {

  private url  = 'http://localhost:3000/api/user/';
  //private headers = new Headers();
  //private headers = new HttpHeaders({'Authorization': this.auth.getToken()});
  constructor(private http: HttpClient, private  auth: AuthorazationService) {  }
  getWorkout(userId: string): Promise<Workout[]> {
    return this.http.get(this.url + `${userId}/workout`)
      .toPromise()
      .then(response => response as Workout[]);
  }
    //skal tilrettes, så det kan modtag information og indsæt det der, det skal også opdaters i exercise når det er gjort skulle det gerne virke.
  public createWorkoutService(userId: string, Wname: string, Wdescription: string): Promise<Workout> {

    return this.http.post(this.url + `${userId}/workout/CreateWorkout`,
      JSON.stringify({WorkoutName: Wname, WorkoutDescription: Wdescription, exercise: []})
      , {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken())})
        .toPromise()
        .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo purpose only
    return Promise.reject(error.message || error);
  }
}
