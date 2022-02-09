import { Sequelize } from 'sequelize';
import DotEnv from 'dotenv';

DotEnv.config();

const sequelize = new Sequelize(PG_DBNAME, PG_USER, PG_PASS, {
    host: PG_HOST,
    dialect: 'postgres'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;