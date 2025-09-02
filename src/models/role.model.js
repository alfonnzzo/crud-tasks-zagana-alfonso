import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

export const roleModel = sequelize.define(
  'Roles',
  {
    rol_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
  },
);
