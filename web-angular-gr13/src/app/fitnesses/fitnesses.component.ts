import { Component, OnInit } from '@angular/core';
import { Fitness } from '../fitness/Fitness';
import { FitnessService } from '../fitness/fitness.service';
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
      this.router.navigate(['/detail', this.selectedFitness._id]);
  }
  add(name: string, description: string, set: number, reps: number): void {
      name = name.trim();
      description = description.trim();
      if (!name || !description || !set || !reps) { return; }
      this.fitnessService.create(name, description, set, reps)
          .then(fitness => {
              this.fitnesses.push(fitness);
              this.selectedFitness = null;
          });
  }
  delete(fitness: Fitness): void {
      this.fitnessService
          .delete(fitness._id)
          .then(() => {
              this.fitnesses = this.fitnesses.filter(h => h !== fitness);
              if (this.selectedFitness === fitness) { this.selectedFitness = null; }
          });
  }
  };


