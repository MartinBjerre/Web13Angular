import { Component, OnInit, Input } from '@angular/core';
import {Workout} from '../models/workout';
import {WorkoutService} from '../workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  @Input('userId') userId: string;

  Workouts: Workout[];

  constructor(private workoutService: WorkoutService) { }

  getWorkout() {
    this.workoutService.getWorkout(this.userId).then(Workouts => this.Workouts = Workouts);
  }

  // https://angular.io/tutorial/toh-pt6#add-the-ability-to-add-heroes  Add the ability to add heroes afsnit. kan være den skal laves om til update.
  createWorkout(workout: Workout) {
    this.workoutService.createWorkout(this.userId, workout).then(Workouts => {this.Workouts.push(Workouts);
    });
  }
  ngOnInit() {
  this.getWorkout();
  }

}
