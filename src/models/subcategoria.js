const mongoose = require('mongoose');

const SubCategoria = mongoose.model('SubCategoria', {
    file_id:{
        type: mongoose.Types.ObjectId,
        ref:'Categoria'
    },
})

module.exports = SubCategoria;