const mongoose = require('mongoose');
var Schema =   mongoose.Schema;

const userSH = Schema({
    name: {
        type: String
    },
    workout: [{ type: Schema.Types.ObjectId, ref: 'workout'}]
});

const User = mongoose.model('User', userSH);