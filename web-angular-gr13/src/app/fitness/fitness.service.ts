import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Fitness } from './Fitness';


@Injectable()
export class FitnessService {
    private fitnessesUrl = 'api/fitnesses';
    //private fitnessesUrl = 'addfitness';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http:Http){}

    getFitnesses(): Promise<Fitness[]> {
        return this.http.get(this.fitnessesUrl)
            .toPromise()
            .then(response => response.json().data as Fitness[])
            .catch(this.handleError);
    }

    getFitness(id: string): Promise<Fitness> {
        const url = `${this.fitnessesUrl}/${id}`;
        //const url = `http://localhost:3000/api/addfitness/59bf744ea510801a3ce3fc0d`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Fitness)
            .catch(this.handleError);
    }

    update(fitness: Fitness): Promise<Fitness> {
        const url = `${this.fitnessesUrl}/${fitness._id}`;
        return this.http
            .put(url, JSON.stringify(fitness), { headers: this.headers })
            .toPromise()
            .then(() => fitness)
            .catch(this.handleError);
    }

    create(name: string, description: string, set: number, reps: number): Promise<Fitness> {
        return this.http
            .post(this.fitnessesUrl, JSON.stringify({ exercise: name, description: description, set: set, reps: reps }), {
                headers: this.headers})
                .toPromise()
                .then(res => res.json().data as Fitness)
                .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
        const url = `${this.fitnessesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); //demo purpose only
        return Promise.reject(error.message || error);
    }
}
