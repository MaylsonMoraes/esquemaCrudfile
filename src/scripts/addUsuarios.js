const database = require('../services/database');

const Usuario = require('../models/usuario');
const usuarioJSON = require('../data/usuario.json');

const addUsuarios = async () => {
    try {
        for (let usuario of usuarioJSON){
            console.log(`Inserindo ${usuario.nome}`);
            await new Usuario(usuario).save();
        }
        console.log('Final do Script');
    } catch (err) {
        console.log(err.message);
    }
};

addUsuarios();