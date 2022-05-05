'use strict';
const mongoose = require('mongoose');

const schemaImpuesto = new mongoose.Schema({
    tasaimpuesto: {type: Number, required: false}
});

module.exports = new mongoose.model('Impuesto', schemaImpuesto, 'impuesto');