import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique:true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
  },
  {
    // Other model options go here
  },
);

export default User;


