
const express = require('express');
const openAI = require('openai');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const path = require('path');
const myRouter = require('./routes/myRoutes');

// Importamos dotenv para acceder a variables de entorno
require('dotenv').config();
const app = express();
/* MIDDLEWARES */
//app.use(morgan('dev'));
app.use(express.json());
//Configurando archivos estáticos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', myRouter);
module.exports = app


    document.addEventListener("DOMContentLoaded", function() {
        var seccionGenero = document.getElementById("seccionGenero");
        var seccionEdad = document.getElementById("seccionEdad"); 
        var generoSeleccionado = "";
        var edadSeleccionada = "";
        seccionGenero.addEventListener("click", function(event) {
            if (event.target.classList.contains("genero")) {
            generoSeleccionado = event.target.textContent;
            console.log("Género seleccionado: " + generoSeleccionado);
        }
    });
        seccionEdad.addEventListener("click", function(event) {
            if (event.target.classList.contains("edad")) {
                edadSeleccionada = event.target.textContent;
                console.log("Edad seleccionada: " + edadSeleccionada);
        }
    });
});
