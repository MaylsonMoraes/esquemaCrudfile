const database = require('../services/database');

const SubCategoria = require('../models/subcategoria');
const subcategoriasJSON = require('../data/subcategoria.json');

const addSubcategorias = async () => {
    try {
        for (let subcategoria of subcategoriasJSON){
            console.log('Inserindo ${subcategoria.nomecategoria}');
            await new SubCategoria(subcategoria).save();
        }
        console.log('Final do Script');
    } catch (err) {
        console.log(err.message);
    }
};

addSubcategorias();