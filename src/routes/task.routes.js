import { Router } from "express";
import {
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
    getAllTasks
} from "../controllers/task.controller.js";

import { 
  createTaskValidation,
  updateTaskValidation,
  deleteTaskValidation,
  getTaskValidation
} from "../middlewares/validations/task.validations.js";

  const taskRouter = Router();

taskRouter.get("/task", getAllTasks);
taskRouter.put("/task/:id",updateTaskValidation, updateTask);
taskRouter.post("/task", createTaskValidation, createTask);
taskRouter.get("/task/:id", getTaskValidation, getTaskById);
taskRouter.delete("/task/:id", deleteTaskValidation, deleteTask);

export default taskRouter;