'use strict';
const mongoose = require('mongoose');

const schemaParametros = new mongoose.Schema({
    descuentolibrofan: { type: Number, required: false },
    minimocompra: { type: Number, required: false },
    tasaimpuesto: { type: Number, required: false },

});

module.exports = new mongoose.model('Parametros', schemaParametros, 'parametros');