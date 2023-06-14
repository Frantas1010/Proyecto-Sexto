const express = require('express');
const app = express();
const openAI = require('openai');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const path = require('path');
const myRouter = require('./routes/myRoutes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Importamos dotenv para acceder a variables de entorno
require('dotenv').config();

/* MIDDLEWARES */
//app.use(morgan('dev'));
app.use(express.json());
//Configurando archivos estáticos
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', myRouter);
module.exports = app

