import User from "./user.model.js";
import Person from "./person.model.js";
import Role from "./role.model.js";
import Task from "./task.model.js";
import userRole from "./user.role.model.js";

// ----------------------------
// User ↔ Person (1:1)
// ----------------------------
Person.hasOne(User, {
  foreignKey: "person_id",
  as: "user",
});

User.belongsTo(Person, {
  foreignKey: "person_id",
  as: "person",
});

// ----------------------------
// User ↔ Roles (N:M) mediante user_roles
// ----------------------------
User.belongsToMany(Role, {
  through: userRole,
  foreignKey: "user_id",
  otherKey: "role_id",
  as: "roles",
});

Role.belongsToMany(User, {
  through: userRole,
  foreignKey: "role_id",
  otherKey: "user_id",
  as: "users",
});

// ----------------------------
// User ↔ Task (1:N)
// ----------------------------
User.hasMany(Task, {
  foreignKey: "user_id",
  as: "tasks",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

export {
  User,
  Person,
  Role,
  Task,
  userRole
};
