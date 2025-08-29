import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const Roles = sequelize.define("Roles", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
});