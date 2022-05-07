const mongoose = require('mongoose');

const schemaComercio = new mongoose.Schema({
    nombrecomercio: { type: String, required: true },
    cedulajuridica: { type: Number, required: true },
    fechainicio: { type: Date, required: true },
    provinciacomercio: { type: String, required: true },
    cantoncomercio: { type: String, required: true },
    distritocomercio: { type: String, required: true },
    direccioncomercio: { type: String, required: true },
    fotocomercio: { type: String, required: true }
});

module.exports = new mongoose.model('Comercio', schemaComercio, 'comercio');