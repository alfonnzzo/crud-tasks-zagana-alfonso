import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

export const Users = sequelize.define("users", {
    id: {primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true},
    title: {type: DataTypes.STRING(100), allowNull: false, unique: true},
    description: {type: DataTypes.STRING(100), allowNull: false},
    isComplete: {type: DataTypes.BOOLEAN, default: false}
});

export default Users;