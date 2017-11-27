import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from '../user/user.component';
import {WorkoutComponent} from '../workout/workout.component';
import {ExerciseComponent} from '../exercise/exercise.component';
import {GetUserComponent} from '../get-user/get-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'user/:userId/workout', component: WorkoutComponent},
  {path: 'user/:userId/workout/:workoutId/exercise', component: ExerciseComponent},
  {path: 'getUser', component: GetUserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
