const express = require('express');
const router = express.Router();

const Estudiante = require('../models/estudiante');

router.get('/estudiantes', (req, res)=>{
    Estudiante.find({}, (err, estudiantes)=>{
        res.json(estudiantes);
    });
});

router.post('/estudiantes', (req, res)=>{
    delete req.body._id;
    Estudiante.create(req.body, (err, estudiante)=>{
        if(err){
            res.json(err);
        }else{
            res.json(estudiante);
        }
    });
});

router.put('/estudiantes/:id', (req, res)=>{
    delete req.body._id;
    Estudiante.update({_id: req.params._id}, req.body, (err, estudiante)=>{
        if(err){
            res.json(err);
        }else{
            res.json(estudiante);
        }
    });
});

router.delete('/estudiantes/:id', (req, res)=>{
    Estudiante.deleteOne({_id: req.params.id}, (err, estudiante)=>{
        if(err){
            res.json(err);
        }else{
            res.json(estudiante);
        }
    });
});

module.exports = router;
