import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { FitnessSearchService } from './fitness-search.service';
import { Fitness } from '../fitness/Fitness';

@Component({
    selector: 'fitness-search',
    templateUrl: './fitness-search.component.html',
    styleUrls: ['./fitness-search.component.css'],
    providers: [FitnessSearchService]
})
export class FitnessSearchComponent implements OnInit {
    fitnesses: Observable<Fitness[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private fitnessSearchService: FitnessSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.fitnesses = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.fitnessSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Fitness[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Fitness[]>([]);
            });
    }

    gotoDetail(fitness: Fitness): void {
        let link = ['/detail', fitness._id];
        this.router.navigate(link);
    }
}
