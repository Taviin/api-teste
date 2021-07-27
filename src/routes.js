/* eslint-disable linebreak-style */
const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// construindo uma rota
routes.get('/todos', ProductController.index);
routes.get('/algum/:id', ProductController.show);
routes.post('/inserir', ProductController.store);
routes.put('/atualizar/:id', ProductController.update);
routes.delete('/apagar/:id', ProductController.destroy);

module.exports = routes;
