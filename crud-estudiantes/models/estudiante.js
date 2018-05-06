const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EstudianteSchema = new Schema({
    documento :{
        type: Number,
        required: true
    },
    nombre :{
        type: String,
        required: true
    },
    apellidos :{
        type: String,
        required: true
    },
    grado :{
        type: Number,
        required: true
    },
    salon :{
        type: String,
        required: true
    },
    correo :{
        type: String,
        required: true
    },
    edad :{
        type: Number,
        required: true
    },
    celular :{
        type: Number,
        required: true
    },
    editable :{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);