import sequelize from './index'; 
import {DataTypes} from 'sequelize'; 

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
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
    type: DataTypes.DECIMAL,
    allowNull: false
  }
})

export default User;