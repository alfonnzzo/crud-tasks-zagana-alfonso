import { Router } from "express";
import { 
    createRole,
    updateRole,
    getAllRole,
    getRoleById,
    deleteRole
} from "../controllers/role.controller.js";

import { 
    createRolValidation,
    getRolValidation,
    updateRolValidation,
    deleteRolValidation
 } from "../middlewares/validations/role.validation.js"

const roleRouter = Router();

roleRouter.post("/roles", createRolValidation, createRole);
roleRouter.get("/roles", getAllRole);
roleRouter.put("/roles/:id", updateRolValidation, updateRole)
roleRouter.delete("/roles/:id", deleteRolValidation, deleteRole)
roleRouter.get("/roles/:id", getRolValidation, getRoleById)

export default roleRouter;