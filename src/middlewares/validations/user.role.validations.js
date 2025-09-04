import { param } from "express-validator";
import userRole from "../../models/user.role.model.js";

export const getUserRoleValidation = [
   param("id")
       .isInt().withMessage("El id debe ser un número entero")
       .custom(async (value) => {
         const user_role = await userRole.findByPk(value);
         if (!user_role) throw new Error("El usuario no existe");
       }),
]