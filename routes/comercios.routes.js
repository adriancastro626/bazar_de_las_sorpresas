const express = require('express');
const comerciosModel = require('../models/comercios.model');
const router = express.Router();
const Comercio = require('../models/comercios.model');

// http://localhost:3000/api/registrar-comercio
router.post('/registrar-comercio', (req, res) => {
    let nuevoComercio = new Comercio({
        nombrecomercio: req.body.nombrecomercio,
        cedulajuridica: req.body.cedulajuridica,
        fechainicio: req.body.fechainicio,
        provinciacomercio: req.body.provinciacomercio,
        cantoncomercio: req.body.cantoncomercio,
        distritocomercio: req.body.distritocomercio,
        direccioncomercio: req.body.direccioncomercio,
        fotocomercio: req.body.fotocomercio
    });

    nuevoComercio.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Comercio, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Comercio registrado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-comercios
router.get('/listar-comercios', (req, res) => {
    Comercio.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los Comercios',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-comercio
router.delete('/eliminar-comercio', (req, res) => {
    Comercio.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el Comercio',
                error
            });
        } else {
            res.json({
                msj: 'Comercio eliminado correctamente',
            });
        }
    });
});


module.exports = router;