const mongoose = require('mongoose');

const schemaParametros = new mongoose.Schema({
    nombrepromocion: { type: String, required: false },
    procentajepromocion: { type: Number, required: false },
    descuentolibrofan: { type: Number, required: false },
    minimocompra: { type: Number, required: false },
    tasaimpuesto: { type: Number, required: false },
    correoadmin: { type: Number, required: false }

});

module.exports = new mongoose.model('Parametros', schemaParametros, 'parametros');