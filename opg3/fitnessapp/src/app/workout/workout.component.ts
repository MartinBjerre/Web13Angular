import {Component, OnInit, Input } from '@angular/core';
import {WorkoutService} from '../workout.service';
import {DataService} from '../data.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Workout} from '../models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers: [WorkoutService, DataService]
})
export class WorkoutComponent implements OnInit {
  userId: string;
  subscription: Subscription;
  Workouts: Workout[];

  constructor(private workoutService: WorkoutService, private activatedRoute: ActivatedRoute, private router: Router) { }


  // https://angular.io/tutorial/toh-pt6#add-the-ability-to-add-heroes  Add the ability to add heroes afsnit. kan være den skal laves om til update.
  createWorkout(workoutName: string, workoutDescription: string) {
    this.workoutService.createWorkoutService(this.userId, workoutName, workoutDescription);
    this.getWorkout();
  }

  getWorkout() {
    console.log(this.userId);
    this.workoutService.getWorkout(this.userId).then(Workouts => this.Workouts = Workouts);
  }
  InsertExercise(id: string): void {
    this.router.navigate(['user/' + this.userId + '/workout/' + id + '/exercise' ]);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
    });
    this.getWorkout();
  }
}
