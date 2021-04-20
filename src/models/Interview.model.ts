import sequelize from "./index";
import { DataTypes } from "sequelize";

const Interview = sequelize.define("user", {
  application_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interviewStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interviewDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  interviewType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Interview;
