const mongoose = require('mongoose');

const schemaUsuarios = new mongoose.Schema({
    primernombre: { type: String, required: true },
    segundonombre: { type: String, required: true },
    primerapellido: { type: String, required: true },
    segundoapellido: { type: String, required: true },
    fechanacimiento: { type: Date, required: true },
    tipoidentificacion: { type: Number, required: true },
    numeroidentificacion: { type: String, required: true },
    genero: { type: String, required: true },
    otrogenero: { type: String, required: false },
    foto: { type: String, required: true },
    correousuario: { type: String, required: true, unique: true },
    contrasenna: { type: String, required: true },
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    distrito: { type: String, required: true },
    ubicacion: { type: String, required: false },
    direccion: { type: String, required: true }

});

module.exports = new mongoose.model('Usuario', schemaUsuarios, 'usuario');