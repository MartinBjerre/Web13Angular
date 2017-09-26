import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FitnessDetailComponent } from './fitness-detail.component';

@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
declarations: [
    AppComponent,
    FitnessDetailComponent
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
