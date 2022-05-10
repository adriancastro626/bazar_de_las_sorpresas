const mongoose = require('mongoose');

const schemaComercio = new mongoose.Schema({
    nombrecomercio: { type: String, required: true },
    cedulajuridica: { type: String, required: true },
    fechainicio: { type: Date, required: true },
    provinciacomercio: { type: Number, required: true },
    cantoncomercio: { type: Number, required: true },
    distritocomercio: { type: Number, required: true },
    direccioncomercio: { type: String, required: true },
    fotocomercio: { type: String, required: true }
});

module.exports = new mongoose.model('Comercio', schemaComercio, 'comercio');