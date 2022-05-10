'use strict';
const mongoose = require('mongoose');

const schemaCorreofactura = new mongoose.Schema({
    correoadmin: {type: String, required: false}
});

module.exports = new mongoose.model('Correofactura', schemaCorreofactura, 'correofactura');