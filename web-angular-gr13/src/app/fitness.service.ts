import { Injectable } from '@angular/core';

import { Fitness } from './Fitness';
import {FITNESSES} from './mock-fitnesses';

@Injectable()
export class FitnessService {
    getFitnesses(): Fitness[] {
        return FITNESSES;
    }
}
