const express = require('express');
const router = express.Router();
const Generosliterarios = require('../models/generosliterarios.model');

// http://localhost:3000/api/registrar-generoliterario
router.post('/registrar-generoliterario', (req, res) => {
    let nuevoGeneroliterario = new Generosliterarios({
        nombregenero: req.body.nombregenero
    });

    nuevoGeneroliterario.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Genero Literario, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Genero Literario registrado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-
router.get('/listar-generosliterarios', (req, res) => {
    Generosliterarios.find((error, generos) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los Generos Literarios',
                error
            });
        } else {
            res.json({
                generos
            });
        }
    });
});

// http://localhost:3000/api/eliminar-generoliterario
router.delete('/eliminar-generoliterario', (req, res) => {
    Generosliterarios.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el Genero Literario',
                error
            });
        } else {
            res.json({
                msj: 'Genero Literario eliminado correctamente',
            });
        }
    });
});


module.exports = router;