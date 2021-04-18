import sequelize from "./index";
import { DataTypes } from "sequelize";

const Application = sequelize.define("application", {
  user_id: {
    type: DataTypes.NUMBER,
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
  applicationMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateApplied: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Application;
