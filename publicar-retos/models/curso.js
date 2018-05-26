const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CursoSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },
    materias:[{
        materia_id: String
    }], 
    nombre:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Curso', CursoSchema);