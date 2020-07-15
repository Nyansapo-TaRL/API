const mongoose = require('mongoose');

const instructorShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {type: String, require:true},
    lastname: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require:true},
    timestamp: {type: String, require:true} // format YYYY-MM-DD hh:mm:ss
});

module.exports = mongoose.model('Instructor', instructorShema);