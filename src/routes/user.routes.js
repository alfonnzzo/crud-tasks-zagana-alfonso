import { Router } from "express";
import {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserById,
} from "../controllers/user.controller.js";

const userRouter = Router();




userRouter.get("/user", getAllUsers);
userRouter.put("user/:id", updateUser);
userRouter.post("/user", createUser);
userRouter.get("/user/:id", getUserById);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;