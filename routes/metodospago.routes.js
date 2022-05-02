const express = require('express');
const tarjetaModel = require('../models/metodospago.model');
const router = express.Router();
const MetodoPago = require('../models/metodospago.model');

// http://localhost:3000/api/registrar-tarjeta
router.post('/registrar-tarjeta', (req, res) => {
    let nuevaTarjeta = new MetodoPago({
        correousuario: req.body.correousuario,
        numtarjeta: req.body.numtarjeta,
        nombretarjeta: req.body.nombretarjeta,
        mes: req.body.mes,
        anno: req.body.anno,
        cvc: req.body.cvc,
        favorito: req.body.favorito
    });

    nuevaTarjeta.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar la Tarjeta, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Tarjeta registrada correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-tarjetas
router.get('/listar-tarjetas', (req, res) => {
    MetodoPago.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo mostrar las Tarjetas',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-tarjeta
router.delete('/eliminar-tarjeta', (req, res) => {
    MetodoPago.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar la Tarjeta',
                error
            });
        } else {
            res.json({
                msj: 'Tarjeta eliminada correctamente',
            });
        }
    });
});


module.exports = router;