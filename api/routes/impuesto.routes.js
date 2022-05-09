const express = require('express');
const router = express.Router();
const Impuesto = require('../models/impuesto.model');

router.post('/registrar-impuesto', (req, res) => {
    let nuevoImpuesto = new Impuesto({
        tasaimpuesto: req.body.tasaimpuesto
    });

    nuevoImpuesto.save(error => {
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

// http://localhost:3000/api/obtener-impuestos
router.get('/obtener-impuestos', (req, res) => {
    Impuesto.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo mostrar el Historial',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

module.exports = router;