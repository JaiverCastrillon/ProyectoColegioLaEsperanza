const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GradoSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },
    curso_id:{
        type: String
    }, 
    nombre:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Grado', GradoSchema);