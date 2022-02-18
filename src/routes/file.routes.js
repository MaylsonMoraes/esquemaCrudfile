const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();

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
router.post('/', (req, res) => {
    const body = req.body;
    res.json(body);
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