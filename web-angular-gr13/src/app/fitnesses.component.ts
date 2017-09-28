import { Component, OnInit } from '@angular/core';
import { Fitness } from './Fitness';
import { FitnessService } from './fitness.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-fitness',
    templateUrl: './fitnesses.component.html',
    styleUrls:['./fitnesses.component.css']
})


export class FitnessesComponent implements OnInit {
  fitnesses: Fitness[];
  selectedFitness: Fitness;
    
  constructor(private fitnessService: FitnessService, private router: Router){}
  ngOnInit(): void {
      this.getFitnesses();
  }
  getFitnesses(): void {
      this.fitnessService.getFitnesses().then(fitnesses => this.fitnesses = fitnesses);
  }
  onSelect(fitness: Fitness): void { this.selectedFitness = fitness }
  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedFitness.id]);
  }
  };


