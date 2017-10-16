import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import { WorkoutComponent } from './workout//workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import {WorkoutService} from './workout.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WorkoutComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
