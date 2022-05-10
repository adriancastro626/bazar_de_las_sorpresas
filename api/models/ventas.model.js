const mongoose = require('mongoose');

const schemaVentas = new mongoose.Schema({
    correousuario: { type: String },
    numeropedido: { type: Number },
    fecha: { type: Date },
    costobruto: { type: Number },
    costoneto: { type: Number },
    descuento: { type: Number },
    grantotal: { type: Number },
    descuentolibrofan: { type: Number },
    nombrelibro: { type: String }

});

module.exports = new mongoose.model('Ventas', schemaVentas, 'ventas');