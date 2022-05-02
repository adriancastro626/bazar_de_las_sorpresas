const mongoose = require('mongoose');

const schemaCarrito = new mongoose.Schema({
    correoUsuario: { type: String, required: true },
    isbncarrito: { type: Number, required: true },
    cantidadcarrito: { type: String, required: true }
});

module.exports = new mongoose.model('Carrito', schemaCarrito, 'carrito');