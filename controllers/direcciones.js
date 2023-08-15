const obtenerTitulos = require('./obCuentos');
const express = require('express')
const router = express.Router();


exports.inicio = (req,res) =>{
    obtenerTitulos((error, titulos) => {
        if (error) {
            console.error('Error:', error);
        } else {
            res.render('home', {info : titulos})
        }
    });
}

exports.form = (req,res) =>{
    res.render('formulario')
}
