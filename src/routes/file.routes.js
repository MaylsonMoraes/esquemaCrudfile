const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();
const File = require('../models/file');

//all register
router.get('/', (req, res) => {
    res.json({ mensagem: 'Pegar todos os registros'});
});

//one register with id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'Pegar somente o registro com o id: ${id}'});
});

//create a register
router.post('/', async (req, res) => {
    try {
        const file = req.body;
        const response = await new File(file).save();
        res.json({ error: false, file: response });
    } catch (err) {
        res.json({ error: true, message: err.message });    
    }
});

//update one register with id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'Atualizar somente registro com id: ${id}'});
});

//delete so register with id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'Deletar somente registro com id: ${id}'});
});

module.exports = router;