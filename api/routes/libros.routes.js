const express = require('express');
const router = express.Router();
const Libro = require('../models/libros.model');

// http://localhost:3000/api/registrar-libro
router.post('/registrar-libro', (req, res) => {
    let nuevoLibro = new Libro({
        titulo: req.body.titulo,
        autor: req.body.autor,
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
    Libro.find((error, libros) => {
        if (error) {
            res.json({
                msj: 'No se pudo mostrar los Libros',
                error
            });
        } else {
            res.json({
                libros
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

// http://localhost:3000/api/obtener-libro-isbn
router.get('/obtener-libro-isbn/:isbn', (req, res) => {
    let isbn = req.params.isbn;
    Libro.find({ isbn: isbn }, (error, libroBD) => {
        if (error) {
            return res.json({
                msj: "No se encontró un libro que considiera con el ISBN.",
                error
            });
        } else {
            return res.json({
                libro: libroBD
            });
        }
    })
});

module.exports = router;