const mongoose = require('mongoose');

const File = mongoose.model('File', {
    Categoria: [],
    SubCategoria: [],
    TitulodoDocumento: String,
    Sintese: String,
    DatadeValidade: Number,
    Renova: [],
    AreaResponsavel: [],
    comentarios: String,
    Versao: Number,
    Status: [],
    Prioridade: [],
    Criadopor: String,
    Criadoem: Number,
    Modificadopor: String,
    Modificadoem: Number,
    responsavel1: [],
    responsavel2: [],
    responsavel3: [],
})

module.exports = File;