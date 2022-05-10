const mongoose = require('mongoose');

const schemaHistorial = new mongoose.Schema({
    correousuario: { type: String },
    metodopago: { type: String },
    nombrelibro: { type: String },
    autor: { type: String },
    numeropedido: { type: Number },
    isbnhistorial: { type: Number },
    fechacompra: { type: Date },
    costo: { type: Number },
    estado: { type: String },
    entrega: { type: String },
    calificacion: { type: Number },
    comentario: { type: String },

});

module.exports = new mongoose.model('Historial', schemaHistorial, 'historial');