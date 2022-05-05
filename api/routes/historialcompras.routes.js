const express = require('express');
const historialModel = require('../models/historialcompras.model');
const router = express.Router();
const Historial = require('../models/historialcompras.model');

// http://localhost:3000/api/registrar-historial
router.post('/registrar-historial', (req, res) => {
    let nuevoHistorial = new Historial({
        correousuario: req.body.correousuario,
        metodopago: req.body.metodopago,
        nombrelibro: req.body.nombrelibro,
        autor: req.body.autor,
        numeropedido: req.body.numeropedido,
        isbnhistorial: req.body.isbnhistorial,
        fechacompra: req.body.fechacompra,
        costo: req.body.costo,
        estado: req.body.estado,
        entrega: req.body.entrega,
        calificacion: req.body.calificacion,
        comentario: req.body.comentario

    });

    nuevoHistorial.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo guardar el Registro, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Registro guardado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-historial
router.get('/listar-historial', (req, res) => {
    Historial.find((error, lista) => {
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

// http://localhost:3000/api/eliminar-historial
router.delete('/eliminar-historial', (req, res) => {
    Historial.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el Historial',
                error
            });
        } else {
            res.json({
                msj: 'Historial eliminado correctamente',
            });
        }
    });
});


module.exports = router;