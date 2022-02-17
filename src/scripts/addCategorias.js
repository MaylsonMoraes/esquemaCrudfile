const database = require('../services/database');

const Categoria = require('../models/categoria');
const categoriasJSON = require('../data/categoria.json');

const addCategorias = async () => {
    try {
        for (let categoria of categoriasJSON){
            console.log(`Inserindo ${categoria.nomecategoria}`);
            await new Categoria(categoria).save();
        }
        console.log('Final do Script');
    } catch (err) {
        console.log(err.message);
    }
};

addCategorias();