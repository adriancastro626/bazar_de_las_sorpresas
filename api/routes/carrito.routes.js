const express = require('express');
const carritoModel = require('../models/carrito.model');
const router = express.Router();
const Carrito = require('../models/carrito.model');

// http://localhost:3000/api/agregar-carrito
router.post('/agregar-carrito', (req, res) => {
    let nuevoCarrito = new Carrito({
        correoUsuario: req.body.correoUsuario,
        isbncarrito: req.body.isbncarrito,
        cantidadcarrito: req.body.cantidadcarrito,
    });

    nuevoCarrito.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo agregar el libro al carrito de compras, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Libro agregado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/mostrar-carrito
router.get('/mostrar-carrito', (req, res) => {
    Carrito.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se puede mostrar el carrito',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-carrito
router.delete('/eliminar-carrito', (req, res) => {
    Carrito.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar del carrito',
                error
            });
        } else {
            res.json({
                msj: 'Libro eliminado correctamente del carrito',
            });
        }
    });
});


module.exports = router;