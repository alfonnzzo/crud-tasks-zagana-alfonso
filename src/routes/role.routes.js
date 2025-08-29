import { Router } from "express";
import { createRol, getAllRoles } from "../controllers/role.controller.js";

const router = Router();

router.post("/create-rol", createRol);
router.get("/roles", getAllRoles);

export default router;