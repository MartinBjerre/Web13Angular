import { Component, OnInit } from '@angular/core';

import { Fitness } from './Fitness';
import { FitnessService } from './fitness.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    fitnesses: Fitness[] = [];

    constructor(private fitnessService: FitnessService) { }

    ngOnInit(): void {
        this.fitnessService.getFitnesses()
            .then(fitnesses => this.fitnesses = fitnesses.slice(0, 4));
    }
}
