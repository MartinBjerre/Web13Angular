import { Injectable } from '@angular/core';

import { Fitness } from './Fitness';
import {FITNESSES} from './mock-fitnesses';

@Injectable()
export class FitnessService {
    getFitnesses(): Promise<Fitness[]> {
        return Promise.resolve(FITNESSES);
    }
    getFitness(id: number): Promise<Fitness> {
        return this.getFitnesses()
            .then(fitnesses => fitnesses.find(fitness => fitness.id === id));
    }
}
