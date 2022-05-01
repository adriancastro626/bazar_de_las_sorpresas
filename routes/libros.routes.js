const express = require('express');
const librosModel = require('../models/libros.model');
const router = express.Router();
const Libro = require('../models/libros.model');

// http://localhost:3000/api/registrar-libro
router.post('/registrar-libro', (req, res) => {
    let nuevoLibro = new Libro({
        titulo: req.body.titulo,
        editorial: req.body.editorial,
        fotos: req.body.fotos,
        precio: req.body.precio,
        publicacion: req.body.publicacion,
        premios: req.body.premios,
        isbn: req.body.isbn,
        sipnosis: req.body.sipnosis
    });

    nuevoLibro.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Libro, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Libro guardado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-libros
router.get('/listar-libros', (req, res) => {
    Libro.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo mostrar los Libros',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-libro
router.delete('/eliminar-libro', (req, res) => {
    Libro.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el Libro',
                error
            });
        } else {
            res.json({
                msj: 'Libro eliminado correctamente',
            });
        }
    });
});


module.exports = router;