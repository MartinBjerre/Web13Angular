import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FitnessDetailComponent } from './fitness-detail.component';
import { FitnessesComponent } from './fitnesses.component';
import { FitnessService } from './fitness.service';
import { DashboardComponent } from './dashboard.component';
import { FitnessSearchComponent } from './fitness-search.component';
@NgModule({

    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        FitnessDetailComponent,
        FitnessesComponent,
        FitnessSearchComponent
    ],
    providers: [
        FitnessService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
