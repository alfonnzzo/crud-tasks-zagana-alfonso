import { Routes } from "express";
import {
    getUsers,
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
} from "../controllers/users.controller.js";

const usersRoutes = Routes();

usersRoutes.get("/users/:id", getUsers);
usersRoutes.put("/users/:id", updateUsers);
usersRoutes.post("/users", createUsers);
usersRoutes.get("/users", getAllUsers);
usersRoutes.delete("/users/:id", deleteUsers);

export default usersRoutes;