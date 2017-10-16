const mongoose = require('mongoose');
var Schema =   mongoose.Schema;

const workoutSH = Schema({
   name: {
       type: String
   },
   description:{
       type: String
   },
    exercise: [{ type: Schema.Types.ObjectId, ref: 'exercise'
    }]
});

const Workout = mongoose.model('Workout', workoutSH);