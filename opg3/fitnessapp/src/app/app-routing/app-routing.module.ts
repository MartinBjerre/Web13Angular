import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from '../user/user.component';
import {WorkoutComponent} from '../workout/workout.component';
import {ExerciseComponent} from '../exercise/exercise.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'workout', component: WorkoutComponent},
  {path: 'exercise.ts', component: ExerciseComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
