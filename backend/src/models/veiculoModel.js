const Sequelize = require('sequelize');
const database = require('../database/database');

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