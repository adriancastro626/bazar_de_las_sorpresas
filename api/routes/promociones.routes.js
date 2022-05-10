const express = require('express');
const router = express.Router();
const Promociones = require('../models/promociones.model');

router.post('/registrar-promociones', (req, res) => {
    let nuevaPromocion = new Promociones ({
        nombrepromocion: req.body.nombrepromocion,
        porcentajepromocion: req.body.porcentajepromocion
    });

    nuevaPromocion.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar la promoción',
                error
            });
        } else {
            res.json({
                msj: 'Promoción registrada correctamente'
            });
        }
    });
});

router.get('/listar-promociones', (req, res) => {
    Promociones.find((error, promociones) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar las promociones',
                error
            });
        } else {
            res.json({
                msj: 'Promociones listadas correctamente',
                promociones
            });
        }
    });
});

router.delete('/eliminar-promocion', (req, res) => {
    Promociones.deleteOne({'_id': req.body._id}, (error)=>{
        if (error) {
            res.json({
                msj: 'No se pudo eliminar la promoción',
                error
            });
        } else {
            res.json({
                msj: 'Promoción eliminada correctamente'
            });
        }
    });
});

module.exports = router;