import sequelize from './db'; 
import { DataTypes } from 'sequelize'; 

const Interview = sequelize.define('interview', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
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
    allowNull: false,
  },
})

export default Interview;