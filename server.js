const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

const app = express();
mongoose.connect('mongodb://localhost/colegio-crud-app-bd');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/', apiRouter);


//Estáticos
app.use(express.static(path.join(__dirname , 'public/dist')));

app.listen(3000, () =>{
    console.log("Servidor corriendo en puerto 3000....")
});