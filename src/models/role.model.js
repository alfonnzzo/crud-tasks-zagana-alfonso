import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

const Role = sequelize.define(
  'Role',
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

export default Role;