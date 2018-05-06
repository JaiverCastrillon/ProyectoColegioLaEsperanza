const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProfesorSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    editable:{
        type: Boolean,
        required:true
    }
});

module.exports = mongoose.model('Profesor', ProfesorSchema);