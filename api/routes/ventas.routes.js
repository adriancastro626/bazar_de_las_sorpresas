const express = require('express');
const ventasModel = require('../models/historialcompras.model');
const router = express.Router();
const Ventas = require('../models/historialcompras.model');

// http://localhost:3000/api/registrar-ventas
router.post('/registrar-ventas', (req, res) => {
    let nuevaVenta = new Ventas({
        correousuario: req.body.correousuario,
        numeropedido: req.body.numeropedido,
        fecha: req.body.fecha,
        costobruto: req.body.costobruto,
        costoneto: req.body.costoneto,
        descuento: req.body.descuento,
        grantotal: req.body.grantotal,
        descuentolibrofan: req.body.descuentolibrofan,
        nombrelibro: req.body.nombrelibro
    });

    nuevaVenta.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar las Ventas, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Venta registrada correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-ventas
router.get('/listar-ventas', (req, res) => {
    Ventas.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar las Ventas',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-venta
router.delete('/eliminar-venta', (req, res) => {
    Ventas.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar la Venta',
                error
            });
        } else {
            res.json({
                msj: 'Venta eliminada correctamente',
            });
        }
    });
});


module.exports = router;