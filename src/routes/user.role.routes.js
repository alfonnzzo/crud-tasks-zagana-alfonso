import express from "express";
import { assignRole, getUserRoles } from "../controllers/user.role.controller.js";

const userRoleRouter = express.Router();

userRoleRouter.post("/user-role", assignRole);
userRoleRouter.get("/:user-role", getUserRoles);

export default userRoleRouter;