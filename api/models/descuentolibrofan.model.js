'use strict';
const mongoose = require('mongoose');

const schemaDescuentofan = new mongoose.Schema({
    descuentolibrofan: {type: Number, required: false},
    minimocompra: {type: Number, required: false}
});

module.exports = new mongoose.model('Descuentofan', schemaDescuentofan, 'descuentofan');