const mongoose = require('mongoose');

const schemaAutor = new mongoose.Schema({
    foto: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    nacimiento: { type: Date, required: true },
    defuncion: { type: Date, required: false },
    biografia: { type: String, required: true }
});

module.exports = new mongoose.model('Autor', schemaAutor, 'autor');