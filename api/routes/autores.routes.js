const express = require('express');
const autoresModel = require('../models/autores.model');
const router = express.Router();
const Autor = require('../models/autores.model');

// http://localhost:3000/api/registrar-autor
router.post('/registrar-autor', (req, res) => {
    let nuevoAutor = new Autor({
        foto: req.body.foto,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacionalidad: req.body.nacionalidad,
        nacimiento: req.body.nacimiento,
        defuncion: req.body.defuncion,
        biografia: req.body.biografia
    });

    nuevoAutor.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Autor, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Autor registrado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-autores
router.get('/listar-autores', (req, res) => {
    Autor.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los Autores',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-autor
router.delete('/eliminar-autor', (req, res) => {
    Autor.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el autor',
                error
            });
        } else {
            res.json({
                msj: 'Autor eliminado correctamente',
            });
        }
    });
});


module.exports = router;