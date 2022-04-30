const mongoose = require('mongoose');


const schemaAutores = new mongoose.Schema({
    adjunto: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    nacimientoAutor: { type: Date, required: true },
    defuncionAutor: { type: Date, required: false },
    bibliografia: { type: String, required: true }
});

module.exports = new mongoose.model('Autor', schemaAutores, 'Autores');