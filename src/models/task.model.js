import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

export const taskModel = sequelize.define(
  'Task',
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),//limita los caracteres a 100
      allowNull:false,
    },
  },
  {
  },
);

