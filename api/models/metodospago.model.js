const mongoose = require('mongoose');

const schemaMetodoPago = new mongoose.Schema({
    correousuario: { type: String, required: true },
    numtarjeta: { type: String, required: true },
    nombretarjeta: { type: String, required: true },
    mes: { type: Number, required: true },
    anno: { type: Number, required: true },
    cvc: { type: String, required: true },
    favorito: { type: Boolean, required: true }
});

module.exports = new mongoose.model('MetodoPago', schemaMetodoPago, 'metodoPago');