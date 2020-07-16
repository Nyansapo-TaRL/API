const mongoose = require('mongoose');

const studentShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // student id
    instructor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'}, // instuctor object id of creator
    firstname: {type: String, require:true}, //first name of student
    lastname: {type: String, require:true}, // last name of student
    age: {type: Number, require:true}, // age of student
    gender: {type: String, require:true}, // gender of student {M,F}
    notes: {type: String}, // notes from teacher 
    created_timestamp: {type: String}, // format YYYY-MM-DD hh:mm:ss
    lastmod_timestamp: {type: String},
    learning_level: {type: String} //
});

module.exports = mongoose.model('Student', studentShema);