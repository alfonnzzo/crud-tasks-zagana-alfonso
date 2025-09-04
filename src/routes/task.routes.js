import { Router } from "express";
import {
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
    getAllTasks
} from "../controllers/task.controller.js";

  const taskRouter = Router();

taskRouter.get("/task", getAllTasks);
taskRouter.put("/task/:id", updateTask);
taskRouter.post("/task", createTask);
taskRouter.get("/task/:id", getTaskById);
taskRouter.delete("/task/:id", deleteTask);

export default taskRouter;