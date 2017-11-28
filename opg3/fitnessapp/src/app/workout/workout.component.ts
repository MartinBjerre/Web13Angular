import { Component, OnInit, Input } from '@angular/core';
import {WorkoutService} from '../workout.service';
import {DataService} from '../data.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers: [WorkoutService, DataService]
})
export class WorkoutComponent implements OnInit {
  userId: string;
  subscription: Subscription;

  constructor(private workoutService: WorkoutService, private activatedRoute: ActivatedRoute) { }

  
  // https://angular.io/tutorial/toh-pt6#add-the-ability-to-add-heroes  Add the ability to add heroes afsnit. kan være den skal laves om til update.
  createWorkout(workoutName: string, workoutDescription: string) {
    this.workoutService.createWorkoutService(this.userId, workoutName, workoutDescription);
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
    });
  }
}
