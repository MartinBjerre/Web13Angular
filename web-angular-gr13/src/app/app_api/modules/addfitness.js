var mongoose = require('mongoose'); 

var fitnessplan = new mongoose.Schema({
    exercise: String,
    description: String,
    sets: Number,
    repstime: Number
});

var fitnessPlan = mongoose.model('fitnessplan', fitnessplan);