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
//var mongoose = require('mongoose');
//var gracefulShutdown;
//var url = 'mongodb://localhost:27017/myproject';
//if (process.env.NODE_ENV === 'production') {
//    url = process.env.MONGODB_URI;
//}

////Opretter Connection
//mongoose.connect(url);

////Monitor connection
//mongoose.connection.on('connected', function () {
//    console.log('Mongoose connected to' + url);
//});
//mongoose.connection.on('error', function () {
//    console.log('Mongoose connected error' + url);
//});
//mongoose.connection.on('disconnected', function () {
//    console.log('Mongoose disconnected');
//});


//require('./addfitness');
