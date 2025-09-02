import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const personModel = sequelize.define(
  'Person',
  {
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
  },
  {
    // Other model options go here
  },
);