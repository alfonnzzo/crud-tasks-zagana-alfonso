import { Router } from "express";
import {
    getAllUsers,
    createUser,
    deleteUsers,
    updateUsers,
    getUsersById,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.put("/:id", updateUsers);
router.post("/", createUser);
router.get("/:id", getUsersById);
router.delete("/:id", deleteUsers);

export default router ;