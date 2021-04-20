import sequelize from "./index";
import { DataTypes } from "sequelize";

const Offer = sequelize.define("user", {
  application_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employmentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salaryTarget: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  benefits: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
  }
});

export default Offer;