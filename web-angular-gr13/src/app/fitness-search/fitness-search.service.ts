import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Fitness } from '../fitness/Fitness';

@Injectable()
export class FitnessSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Fitness[]> {
        return this.http
            .get(`api/fitnesses/?exercise=${term}`)
            .map(response => response.json().data as Fitness[]);
    }
}
