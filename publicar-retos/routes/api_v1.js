const express = require('express');
const router = express.Router();

const Profesor = require('../models/profesor');
const Curso = require('../models/curso');
const Grado = require('../models/grado');
const Materia = require('../models/materia');
const Reto = require('../models/reto');
const Tema = require('../models/tema');

//id: id de profesor
//Retornar todo un profesor con parámetro su id, 
//para desde el front-end acceder a las materias que dicta.
router.get('/materias/:id', (req, res) => {
    Profesor.find({_id: req.params.id}, (err, prof) => {
        if(err){
            res.json(err)
        }else{
            res.json(prof);
        }
    });
});


//id de la materia
//Retorna lista de ids de temas de una materia
router.get('/temas/:id', (req, res) => {
    Materia.find({_id: req.params.id}, (err, mat) => {
        if(err){
            res.json(err)
        }else{
            res.json(mat);
        }
    });
});


//retorno todos los temas para validar con los ids que ya
//se tienen, los nombres
router.get('/nombres_temas/', (req, res) => {
    Tema.find({}, (err, tems) => {
        if(err){
            res.json(err)
        }else{
            res.json(tems);
        }
    });
});


module.exports = router;