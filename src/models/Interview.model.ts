import sequelize from './db'; 
import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

const Interview = sequelize.define('interview', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    defaultValue: uuid(),
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})

export default Interview;
