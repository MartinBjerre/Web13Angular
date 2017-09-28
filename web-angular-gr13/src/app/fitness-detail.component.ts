import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Fitness } from './Fitness';
import { FitnessService } from './fitness.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'fitness-detail',
    templateUrl: './fitness-detail.component.html',
    styleUrls: ['./fitness-detail.component.css']
})

export class FitnessDetailComponent implements OnInit {
    fitness: Fitness;

    constructor(
        private fitnessService: FitnessService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.fitnessService.getFitness(+params.get('id')))
            .subscribe(fitness => this.fitness = fitness);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.fitnessService.update(this.fitness)
            .then(() => this.goBack());
    }
}
