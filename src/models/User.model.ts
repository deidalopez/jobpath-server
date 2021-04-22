import sequelize from './db'; 
import { DataTypes } from 'sequelize'; 

const User = sequelize.define('user', {
  _id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }, 
  desiredJobTitle: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dateStartedLooking: {
    type: DataTypes.DATE,
    allowNull: true
  },
  salaryTarget: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

export default User;