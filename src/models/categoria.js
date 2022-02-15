const mongoose = require('mongoose');

const Categoria = mongoose.model('Categoria', {
    file_id:{
        type: mongoose.Types.ObjectId,
        ref:'File'
    },
    Categoria: [],
    SubCategoria: [],
})

module.exports = Categoria;