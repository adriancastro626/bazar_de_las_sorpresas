const mongoose = require('mongoose');

const schemaLibro = new mongoose.Schema({
    titulo: { type: String, required: true },
    editorial: { type: String, required: true },
    portada: { type: String, required: false },
    contraportada: { type: String, required: false },
    precio: { type: Number, required: true },
    publicacion: { type: Number, required: true },
    genero: {type: String, required: true},
    autor: {type: String, required: true},
    descuento: {type: String, required: true},
    isbn: { type: Number, required: true, unique: true },
    premios: { type: String, required: false },
    sipnosis: { type: String, required: true }
});

module.exports = new mongoose.model('Libro', schemaLibro, 'libro');