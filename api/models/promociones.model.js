'use strict';
const mongoose = require('mongoose');

const schemaPromociones = new mongoose.Schema({
    nombrepromocion: {type: String, required: false},
    porcentajepromocion: {type: Number, required: false}
});

module.exports = new mongoose.model('Promociones', schemaPromociones, 'promociones' );