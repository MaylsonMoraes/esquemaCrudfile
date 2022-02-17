const mongoose = require('mongoose');

const SubCategory = mongoose.model('SubCategory', {
    file_id:{
        type: mongoose.Types.ObjectId,
        ref:'Category'
    },
    subcategoria: []

})

module.exports = SubCategory;