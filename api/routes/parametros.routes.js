const express = require('express');
const parametrosModel = require('../models/parametros.model');
const router = express.Router();
const Parametros = require('../models/parametros.model');

// http://localhost:3000/api/registrar-parametros
router.post('/registrar-parametros', (req, res) => {
    let nuevoParametro = new Parametros({
     
    });

    nuevoParametro.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Parametro, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Parametro registrado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-parametros
router.get('/listar-parametros', (req, res) => {
    Parametros.find((error, promociones) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los Parametros',
                error
            });
        } else {
            res.json({
                msj: 'Correo retornado correctamente',
                promociones
            });
        }
    });
});

// http://localhost:3000/api/eliminar-parametro
router.delete('/eliminar-parametro', (req, res) => {
    Parametros.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el Parametro',
                error
            });
        } else {
            res.json({
                msj: 'Parametro eliminado correctamente',
            });
        }
    });
});


module.exports = router;