const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    file_id:{
        type: mongoose.Types.ObjectId,
        ref:'File'
    },
    Categoria: [],
    SubCategoria: [],
})

module.exports = Category;