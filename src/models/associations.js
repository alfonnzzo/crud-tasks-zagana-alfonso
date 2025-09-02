import { userModel } from "./user.model.js";
import { personModel } from "./person.model.js";
import { roleModel } from "./role.model.js";
import { taskModel } from "./task.model.js";
import { user_roles } from "./user.role.model.js";

// ----------------------------
// User ↔ Person (1:1)
// ----------------------------
personModel.hasOne(userModel, {
  foreignKey: "person_id",
  as: "user",
});

userModel.belongsTo(personModel, {
  foreignKey: "person_id",
  as: "person",
});

// ----------------------------
// User ↔ Roles (N:M) mediante user_roles
// ----------------------------
userModel.belongsToMany(roleModel, {
  through: user_roles,
  foreignKey: "user_id",
  otherKey: "role_id",
  as: "roles",
});

roleModel.belongsToMany(userModel, {
  through: user_roles,
  foreignKey: "role_id",
  otherKey: "user_id",
  as: "users",
});

// ----------------------------
// User ↔ Task (1:N)
// ----------------------------
userModel.hasMany(taskModel, {
  foreignKey: "user_id",
  as: "tasks",
});

taskModel.belongsTo(userModel, {
  foreignKey: "user_id",
  as: "user",
});

export {
  userModel,
  personModel,
  roleModel,
  taskModel,
  user_roles
};
