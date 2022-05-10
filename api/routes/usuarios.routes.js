const express = require('express');
const usuariosModel = require('../models/usuarios.model');
const router = express.Router();
const Usuario = require('../models/usuarios.model');
const mailer = require('../templates/registro.template')

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
        direccion: req.body.direccion,
        mapa: req.body.mapa

    });

    nuevoUsuario.save((error, personaDB) => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el Usuario, ocurrio un error',
                error
            });
        } else {
            res.json({
                msj: 'Usuario registrado correctamente',
                personaDB
            });
            mailer.enviar_mail(personaDB.primernombre);
        }

    });
});


// http://localhost:3000/api/inicio-sesion
router.post('/inicio-sesion', (req, res) => {
    Usuario.findOne({ correousuario: req.body.correousuario }).then(
        (usuario) => {
            if (usuario) {
                if (usuario.contrasenna == req.body.contrasenna) {
                    res.json({
                        success: true,
                        usuario: usuario
                    });
                } else {
                    res.json({
                        success: false,
                        msj: 'Usuario y/o Contraseña Invalido'
                    });
                }
            } else {
                res.json({
                    success: false,
                    msj: 'El usuario no existe'
                });
            }
        }
    )
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

// http://localhost:3000/api/editar-usuario
router.post('/editar-usuario', (req, res) => {
    let body = req.body;
    Usuario.updateOne({ _id: body._id }, {
            $set: req.body
        },
        (error, info) => {
            if (error) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo modificar el cliente',
                    error
                });
            } else {
                res.json({
                    resultado: true,
                    info: info
                })
            }
        }
    )
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