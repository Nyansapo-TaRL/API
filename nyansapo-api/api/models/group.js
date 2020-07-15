const mongoose = require('mongoose');

const groupShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true}, // group can be school or date of operation
    created_timestamp: {type: String, require:true}, // format YYYY-MM-DD hh:mm:ss
    lastmod_timestamp: {type: String, require:true}
});

module.exports = mongoose.model('Group', groupShema);