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

module.exports = router;