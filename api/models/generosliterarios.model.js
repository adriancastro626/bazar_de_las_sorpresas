const mongoose = require('mongoose');

const schemaGenerosliterarios = new mongoose.Schema({
    nombregenero: { type: Number, required: true }
});

module.exports = new mongoose.model('Generosliterarios', schemaGenerosliterarios, 'generosliterarios');