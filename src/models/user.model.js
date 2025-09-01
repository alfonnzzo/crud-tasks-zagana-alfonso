import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

export const Users = sequelize.define("users", {
    id: {primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true},
    title: {type: DataTypes.STRING(100), allowNull: false, unique: true},
    description: {type: DataTypes.STRING(100), allowNull: false},
    isComplete: {type: DataTypes.BOOLEAN, default: false}
});


User.hasOne(Documento, {
  foreignKey: "author_id",
  as: "documento", 
  onDelete: "CASCADE" 
});

Documento.belongsTo(User, {
  foreignKey: "author_id",
  as: "user"
})

User.belongsToMany(Roles, {
  through: user_roles, 
  foreignKey: "user_id",  
  otherKey: "role_id",   
  timestamps: false
});


Roles.belongsToMany(User, {
  through: user_roles,
  foreignKey: "role_id",   
  otherKey: "user_id"      
});

export default Users;