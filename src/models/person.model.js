import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Person = sequelize.define(
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

export default Person;