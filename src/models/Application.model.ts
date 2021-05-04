import sequelize from "./db";
import { DataTypes } from "sequelize";
import { v4 as uuid } from 'uuid';

const Application = sequelize.define('application', {
  _id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    defaultValue: uuid(),
  },
  employmentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Application;
