const mongoose = require('mongoose');

const instructorShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {type: String, require:true},
    lastname: {type: String, require:true},
    emial: {type: String, require:true},
    password: {type: String, require:true},
    timestamp: {type: String, require:true}, // format HH:MM:SS,DD/MM/YYYY egg 12:33:44,07/12/2020
    date : {type: Date}
});

module.exports = mongoose.model('Instructor', instructorShema);