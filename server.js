const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o DB
mongoose.connect('mongodb+srv://deploy:uploaddeploy@cluster0-y9jsf.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true });
requireDir('./src/models');

// Rotas
app.use('/pessoas', require('./src/routes'));

app.listen(process.env.PORT || 3000, () => console.log(' Servidor On'));