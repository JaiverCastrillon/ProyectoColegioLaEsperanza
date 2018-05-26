const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TemaSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },
    preguntas:[{
        codigo: String,
        titulo: String,
        opciones:[{opcion: String}],
        respuesta: int
    }],
    nombre:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Tema', TemaSchema);