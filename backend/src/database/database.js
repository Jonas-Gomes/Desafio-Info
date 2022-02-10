const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.PG_DBNAME, process.env.PG_USER, process.env.PG_PASS, {
    host: process.env.PG_HOST,
    dialect: 'postgres'
});

module.exports = sequelize;