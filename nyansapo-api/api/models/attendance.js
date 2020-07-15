const mongoose = require('mongoose');

const attendanceShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    student_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
    present : {type: mongoose.Schema.Types.Boolean, required: true}, // true or false
    created_timestamp: {type: String, require:true}, // format YYYY-MM-DD hh:mm:ss
    lastmod_timestamp: {type: String, require:true}
});

module.exports = mongoose.model('Attendance', attendanceShema);