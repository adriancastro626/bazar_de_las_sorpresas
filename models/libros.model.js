const mongoose = require('mongoose');

const schemaLibro = new mongoose.Schema({
    titulo: { type: String, required: true },
    editorial: { type: String, required: true },
    fotos: { type: String, required: true },
    precio: { type: Number, required: true },
    publicacion: { type: Date, required: true },
    premios: { type: String, required: false },
    isbn: { type: Number, required: true, unique: true },
    sipnosis: { type: String, required: true }
});

module.exports = new mongoose.model('Libro', schemaLibro, 'libro');