import { Router } from "express";
import {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserById,
} from "../controllers/user.controller.js";

import { 
    createUserValidation,
    updateUserValidation,
    deleteUserValidation,
    getUserValidation
} from "../middlewares/validations/user.validation.js";

const userRouter = Router();

userRouter.get("/user", getAllUsers);
userRouter.put("user/:id", updateUserValidation, updateUser);
userRouter.post("/user", createUserValidation, createUser);
userRouter.get("/user/:id", getUserValidation, getUserById);
userRouter.delete("/user/:id", deleteUserValidation, deleteUser);

export default userRouter;