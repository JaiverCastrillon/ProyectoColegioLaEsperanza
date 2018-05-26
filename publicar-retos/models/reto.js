const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RetoSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },
    tiempo:{
        type: int,
        required:true        
    }, 
    estado:{
        type:boolean
    },
    grado_id:{
        type: String
    },
    preguntas:[{
        codigo: String,
        titulo: String,
        opciones:[{opcion: String}],
        respuesta: int
    }],

});

module.exports = mongoose.model('Reto', RetoSchema);