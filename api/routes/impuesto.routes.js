const express = require('express');
const router = express.Router();
const Impuesto = require('../models/impuesto.model');

router.post('/registrar-impuesto', (req, res) => {
    let nuevoImpuesto = new Impuesto ({
        tasaimpuesto: req.body.tasaimpuesto
    });

    nuevoImpuesto.save(error =>{
        if (error) {
            res.json({
                msj: 'No se pudo registrar el impuesto',
                error
            });
        } else {
            res.json({
                msj: 'Impuesto registrado correctamente'
            });
        }
    });
});


module.exports = router;