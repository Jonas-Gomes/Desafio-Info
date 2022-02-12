const Sequelize = require('sequelize');
const database = require('../database/database');

// Na criação da tabela não é necessário especificar o ID, pois o sequelize já o implementa automáticamente na criação da tabela
const Veiculos = database.define('veiculos',{
    placa:{ 
        type: Sequelize.STRING,
    },
    chassi:{
        type: Sequelize.STRING,
    },
    renavam:{ 
        type: Sequelize.STRING, 
    },
    modelo:{ 
        type: Sequelize.STRING,
    },
    marca:{ 
        type: Sequelize.STRING,
    },
    ano:{
        type: Sequelize.INTEGER,
    }
});

module.exports = Veiculos;