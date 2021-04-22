import sequelize from './db'; 
import { DataTypes } from 'sequelize'; 

const Offer = sequelize.define('offer', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
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