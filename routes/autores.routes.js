const express = require('express');
const router = express.Router();
const Autor = require('../models/autores.model');

// http://localhost:3000/api/registrar-autor
router.post('/registrar-autor', (req, res) => {

    let nuevoAutor = new Autor({
        adjunto: req.body.adjunto,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacionalidad: req.body.nacionalidad,
        nacimientoAutor: req.body.nacimientoAutor,
        defuncionAutor: req.body.defuncionAutor,
        bibliografia: req.body.bibliografia

    });

    nuevoAutor.save(error => {
        if (error) {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar el autor, ocurrió un error',
                error
            });
        } else {
            res.json({
                resultado: true,
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
                msj: 'No se pudo listar los autores',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

router.delete('/eliminar-autor', (req, res) => {
    Autor.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo elimnar el autor',
                error
            });
        } else {
            res.json({
                msj: 'Autor eliminado correctamente'
            });
        }
    });
});


/*let data = {
    "adjunto":"Hola.jpg",
    "nombre": "Prueba2",
    "apellido": "prueba",
    "genero":"femenino",
    "nacimientoAutor": "1987/10/12",
    "defuncionAutor": "",
    "bibliografia":"Hola Hola"
}*/


module.exports = router;