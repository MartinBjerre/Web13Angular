const mongoose = require('mongoose');
var Schema =   mongoose.Schema;

const workoutSH = Schema({
    WorkoutNamee: {
       type: String
   },
    WorkoutDescription:{
       type: String
   },
    exercise: [{ type: Schema.Types.ObjectId, ref: 'exercise'
    }]
});

const workout = mongoose.model('workout', workoutSH);