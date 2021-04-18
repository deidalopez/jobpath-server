import {Sequelize} from 'sequelize'; 

declare var process: {
  env: {
    DB_CONNECTION_URI: string
  }
}

const DB_CONNECTION_URI = process.env.DB_CONNECTION_URI;
const sequelize:Sequelize = new Sequelize(DB_CONNECTION_URI);

export default sequelize;