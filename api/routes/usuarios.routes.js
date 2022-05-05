const express = require('express');
const usuariosModel = require('../models/usuarios.model');
const router = express.Router();
const Usuario = require('../models/usuarios.model');

// http://localhost:3000/api/registrar-usuario
router.post('/registrar-usuario', (req, res) => {
    let nuevoUsuario = new Usuario({
        primernombre: req.body.primernombre,
        segundonombre: req.body.segundonombre,
        primerapellido: req.body.primerapellido,
        segundoapellido: req.body.segundoapellido,
        fechanacimiento: req.body.fechanacimiento,
        tipoidentificacion: req.body.tipoidentificacion,
        numeroidentificacion: req.body.numeroidentificacion,
        genero: req.body.genero,
        otrogenero: req.body.otrogenero,
        foto: req.body.foto,
        correousuario: req.body.correousuario,
        contrasenna: req.body.contrasenna,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        ubicacion: req.body.ubicacion,
        direccion: req.body.direccion

    });

    nuevoUsuario.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Usuario, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Usuario registrado correctamente'
            });
        }
    });
});

// http://localhost:3000/api/listar-usuarios
router.get('/listar-usuarios', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los Usuarios',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

// http://localhost:3000/api/eliminar-usuario
router.delete('/eliminar-usuario', (req, res) => {
    Usuario.deleteOne({ '_id': req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'No se pudo eliminar el Usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuario eliminado correctamente',
            });
        }
    });
});


module.exports = router;