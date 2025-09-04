import express from "express";
import { assignRole, getUserRole, getRoleById } from "../controllers/user.role.controller.js";
import { getUserRoleValidation } from "../middlewares/validations/user.role.validations.js"

const userRoleRouter = express.Router();

userRoleRouter.post("/user-role", assignRole);
userRoleRouter.get("/:user-role", getUserRole);
userRoleRouter.get("/user-role", getUserRoleValidation, getRoleById)

export default userRoleRouter;