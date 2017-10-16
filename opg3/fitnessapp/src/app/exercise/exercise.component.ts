import { Component, OnInit, Input } from '@angular/core';
import {Exercise} from '../models/exercise';
import {ExerciseService} from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input('userId') userId: string;
  @Input('workoutId') workoutId: string;
  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) { }

  getExercise() {
    this.exerciseService.getExercise(this.userId, this.workoutId).then(exercises => this.exercises = exercises);
  }

  // https://angular.io/tutorial/toh-pt6#add-the-ability-to-add-heroes  Add the ability to delete a hero
  createWorkout(exercise: Exercise) {
    this.exerciseService.createExercise(this.userId, this.workoutId, exercise).then(exercises => {
      this.exercises.push(exercises);
    });
  }
  ngOnInit() {
  }

}
