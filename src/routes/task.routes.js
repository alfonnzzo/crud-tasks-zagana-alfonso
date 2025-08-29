import { Router } from "express";
import {
    getAllTasks,
    createTasks,
    updateTasks,
    deleteTasks
} from "../controllers/task.controller.js";

  const router = Router();

//tasksRoutes.get("/tasks", getAllTasks);

router.get("/", getAllTasks);
router.put("/:id", updateTasks);
 router.post("/", createTasks);
router.get("/:id", getAllTasks);
 router.delete("/:id", deleteTasks);

export default router ;