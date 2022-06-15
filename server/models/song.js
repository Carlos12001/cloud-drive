const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: {type: String, require: true},
    artist: {type: String, require: true},
    song: {type: String, require: true},
    img: {type: String, require: true},
})
module.exports = mongoose.model('song',songSchema)