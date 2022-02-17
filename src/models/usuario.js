const mongoose = require('mongoose');
const { stringify } = require('querystring');

const Usuario = mongoose.model('Usuario', {
    email: String,
    senha: String,
});

module.exports = Usuario;