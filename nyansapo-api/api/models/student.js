const mongoose = require('mongoose');

const studentShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // student id
    instructor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'}, // instuctor object id of creator
    firstname: {type: String, require:true}, //first name of student
    lastname: {type: String, require:true}, // last name of student
    age: {type: Number, require:true}, // age of student
    gender: {type: String, require:true}, // gender of student {M,F}
    notes: {type: String, require:true}, // notes from teacher 
    timestamp: {type: String, require:true}, // timestamp -- need to figure this out 
    date: {type: Date, require:true}, // we can use this if timestamp proves difficult
    assessments : {type: mongoose.Schema.Types.Array} // arrays of all { assessment_id, final_level }
});

module.exports = mongoose.model('Student', studentShema);