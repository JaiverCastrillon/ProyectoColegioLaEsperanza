const mongoose = require('moongose');
const Schema = mongoose.Scheema;

let userSchema = new Schema({
    _cedula : {
        type: number,
        required: true
    },
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    },
    position : {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Admin', AdminSchema);