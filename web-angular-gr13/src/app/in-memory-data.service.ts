import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const fitnesses = [
            { id: 0, exercise: 'lunch', description: 'leg', set: 3, reps: 12 },
            { id: 11, exercise: 'kick', description: 'leg', set: 3, reps: 12 }
        ];
        return { fitnesses };
    }
}
