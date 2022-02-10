const express = require('express');
const cors = require('cors');
const index = require('./routes/index');
const veiculo = require('./routes/veiculo.routes');
const veiculoModel = require('./models/veiculoModel');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

// veiculoModel.sync({force: true});

app.use(index);
app.use('/', veiculo);
module.exports = app;