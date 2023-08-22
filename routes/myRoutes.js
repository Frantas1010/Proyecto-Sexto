const direcciones = require('../controllers/direcciones')
const chat = require('../controllers/chatGPT')
const express = require('express')
const router = express.Router();
router.route('/formulario').get(direcciones.form)
router.route('/').get(direcciones.inicio)
router.route('/consultar').post((req, res) => {
    console.log(req.body.longitud)
    chat.consulta(req, res, req.body.clave, req.body.genero, req.body.longitud);
});


module.exports = router;