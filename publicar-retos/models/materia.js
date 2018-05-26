const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MateriaSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },
    temas:[{
        tema_id: String
    }],
    nombre:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Materia', MateriaSchema);