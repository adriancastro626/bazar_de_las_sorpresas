const express = require('express');
const router = express.Router();
const Correofactura = require('../models/correofactura.model');

router.post('/registrar-correoadmin', (req, res) => {
    let nuevoCorreoadmin = new Correofactura ({
        correoadmin: req.body.correoadmin
    });

    nuevoCorreoadmin.save(error =>{
        if (error) {
            res.json({
                msj: 'No se pudo registar el correo para facturas',
                error
            });
        } else {
            res.json({
                msj: 'Correo facturas se a resgistrado correctamente'
            });
        }
    });
});

router.get('/listar-correoadmin', (req, res) => {
    Correofactura.find((error, correoadmin) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el Correo Admin',
                error
            });
        } else {
            res.json({
                correoadmin
            });
        }
    });
});

module.exports = router;