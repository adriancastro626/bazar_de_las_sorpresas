const express = require('express');
const router = express.Router();
const Descuentofan  = require('../models/descuentolibrofan.model');

router.post('/registrar-descuentofan', (req, res) =>{
    let nuevoDescuentofan = new Descuentofan ({
        descuentolibrofan: req.body.descuentolibrofan,
        minimocompra: req.body.minimocompra
    });

    nuevoDescuentofan.save(error =>{
        if (error) {
            res.json({
                msj: 'No se pudo registrar el descuento libro fan',
                error
            });
        } else {
            res.json({
                msj: 'Descuento libro fan resgistrado correctamente'
            });
        }
    });
});

module.exports = router;