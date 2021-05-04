import sequelize from './db'; 
import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

const Offer = sequelize.define('offer', {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    defaultValue: uuid(),
  },
  employmentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  benefits: {
    type: DataTypes.JSON,
    allowNull: false,
  },
})

export default Offer;