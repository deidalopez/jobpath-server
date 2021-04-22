import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;

const sequelize: Sequelize = new Sequelize( DB_NAME || '', DB_USERNAME || '', DB_PASSWORD || '', {
  host: DB_HOST,
  port: DB_PORT ? +DB_PORT : 5432,
  logging: console.log,
  dialect: 'postgres',
});

export default sequelize;