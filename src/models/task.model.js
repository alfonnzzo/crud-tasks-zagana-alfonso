import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define(
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

export default Task;