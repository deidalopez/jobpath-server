import sequelize from "./db";
import { DataTypes } from "sequelize";

const Application = sequelize.define('application', {
  _id: {
    type: DataTypes.STRING,
    unique: true,
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
    defaultValue: 'Applied',
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Application;
