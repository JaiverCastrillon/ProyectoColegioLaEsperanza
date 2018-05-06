const express = require('express');
const router = express.Router();

const Profesor = require('../models/profesor');

router.get('/profesores', (req, res) => {
    Profesor.find({}, (err, profesores) => {
        res.json(profesores);
    });
});

router.post('/profesores', (req, res) => {
    delete req.body._id;
    Profesor.create(req.body, (err, profesor) =>{
        console.log(err);
        console.log(profesor);
        if(err){
            res.json(err)
        }else{
            res.json(profesor);
        }
    });
});


router.put('/profesores/:id', (req, res) => {
    delete req.body.id;
    Profesor.update({_id: req.params.id}, req.body, (err, profesor) =>{
        if(err){
            res.json(err)
        }else{
            res.json(profesor);
        }

    });
});

router.delete('/profesores/:id', (req, res) => {
    
    Profesor.deleteOne({_id: req.params.id}, (err, profesor) =>{
        if(err){
            res.json(err)
        }else{
            res.json(profesor);
        }
    });
});

module.exports = router;