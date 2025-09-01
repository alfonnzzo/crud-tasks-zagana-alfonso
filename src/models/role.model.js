import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const user_roles = sequelize.define("user_roles", {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },

    user_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: "User",
            key: "id",
        },  
    },

    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Roles",
            key: "id",
        },
    }
}, {
    tableName: "user_roles",
    timestamps: false,
});