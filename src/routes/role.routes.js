import { Router } from "express";
import { createRol, getAllRoles } from "../controllers/role.controller.js";

const roleRouter = Router();

roleRouter.post("/roles", createRol);
roleRouter.get("/roles", getAllRoles);

export default roleRouter;