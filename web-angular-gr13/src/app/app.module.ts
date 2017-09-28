import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FitnessDetailComponent } from './fitness-detail.component';
import { FitnessesComponent } from './fitnesses.component';
import { FitnessService } from './fitness.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({

    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        FitnessDetailComponent,
        FitnessesComponent
    ],
    providers: [
        FitnessService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
