import { Component, Input } from '@angular/core';
import { Fitness } from './Fitness';

@Component({
    selector: 'fitness-detail',
    template: `<div *ngIf="fitness">
    <h2>{{fitness.exercise}} details!</h2>
    <div><label>description: </label>{{fitness.description}}</div>
    <div>
      <label>exercise: </label>
      <input [(ngModel)]="fitness.exercise" placeholder="exercise"/>
    </div>
  </div>`
})

export class FitnessDetailComponent {
   @Input() fitness: Fitness;
}
