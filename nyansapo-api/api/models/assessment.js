const mongoose = require('mongoose');

const assessmentShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    student_id : {type: mongoose.Schema.Types.ObjectId , ref: 'Student'}, // need more edit
    timestamp: {type: String, require:true}, // format HH:MM:SS,DD/MM/YYYY egg 12:33:44,07/12/2020
    level: {type: String, require:true}, // final level of student after assessment
    assessment_key: {type: String, required: true}, // assessment key of the assessment made
    letters_corret: {type: String}, 
    letters_wrong: {type: String},
    words_correct: {type: String},
    words_wrong: {type: String},
    paragrahp_words_wrong: {type: String},
    paragrahp_duration: {type: Number},
    story_ans_q1: {type: String},
    story_ans_q2: {type: String},
    story_ans_q1_duration: {type: Number},
    story_ans_q2_duration: {type: Number}
});

module.exports = mongoose.model('Assessment', assessmentShema);