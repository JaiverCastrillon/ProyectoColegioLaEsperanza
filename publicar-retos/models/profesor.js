const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProfesorSchema = new Schema({
    cc:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    clave:{
        type:String,
        required:true
    },
    materias:[{
        materia_id: String
    }],   
    grados:[{
        grado_id: String
    }],
    grado_materia:[{
        materia_id: String,
        grado_id: String        
    }],
    editable:{
        type: Boolean,
        required:true
    }

});

module.exports = mongoose.model('Profesor', ProfesorSchema);