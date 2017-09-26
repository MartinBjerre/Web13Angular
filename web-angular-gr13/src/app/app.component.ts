import { Component, OnInit } from '@angular/core';
import { Fitness } from './Fitness';
import { FitnessService } from './fitness.service';


@Component({
  selector: 'app-root',
  template: `
  <h1> {{title }}</h1>
  <h2> My Fitness Activity</h2>
  <ul class="fitnesses">
    <li *ngFor="let fitness of fitnesses"
      [class.selected]="fitness === selectedFitness"
      (click)="onSelect(fitness)">
      <span class="badge">{{fitness.exercise}}</span> {{fitness.description}} | {{fitness.set}} | {{fitness.reps}}
    </li>
  </ul>
  <fitness-detail [fitness]="selectedFitness"></fitness-detail>
  `,
  //templateUrl: './app.component.html',
  styles:  [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .fitnesses {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .fitnesses li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .fitnesses li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .fitnesses li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .fitnesses .text {
      position: relative;
      top: -3px;
    }
    .fitnesses .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [FitnessService]
})


export class AppComponent implements OnInit {
  title = 'Fitness App';
  fitnesses: Fitness[];
  selectedFitness: Fitness;
    
  constructor(private fitnessService: FitnessService){}
  ngOnInit(): void {
      this.getFitnesses();
  }
  getFitnesses(): void {
      this.fitnesses = this.fitnessService.getFitnesses();
  }
  onSelect(fitness: Fitness): void {this.selectedFitness = fitness}
  };


