// express.js
const express = require('express');
const mongoose = require('mongoose');
const mainRoutes = require('../routes/mainRoutes');
const connectToDatabase = require('../models/db'); // Importe a função de conexão

const app = express();

// Configurações do Express
app.use(express.json());

// Conectar ao banco de dados
connectToDatabase();

// Rotas
app.use('/', mainRoutes);

module.exports = app;