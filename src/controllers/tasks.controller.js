import { Tasks } from "../models/tasks.model.js";

// Obtener todas las tareas
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener las tareas" });
  }
};

// Obtener una tarea por ID
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener la tarea" });
  }
};

// Crear tarea
export const createTasks = async (req, res) => {
  let { title, description, isComplete } = req.body;

  if (!title?.trim() || !description?.trim()) {
    return res.status(400).json({ msg: "Título y descripción son obligatorios" });
  }

  // Validar isComplete
  if (isComplete !== undefined) {
    if (typeof isComplete === "string") {
      if (isComplete.toLowerCase() === "true") {
        isComplete = true;
      } else if (isComplete.toLowerCase() === "false") {
        isComplete = false;
      } else {
        return res.status(400).json({ msg: "isComplete debe ser true o false" });
      }
    } else if (typeof isComplete !== "boolean") {
      return res.status(400).json({ msg: "isComplete debe ser booleano" });
    }
  }

  try {
    const existing = await Tasks.findOne({ where: { title } });
    if (existing) {
      return res.status(400).json({ msg: "Ese título ya está en uso." });
    }

    const task = await Tasks.create({ title, description, isComplete });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear la tarea" });
  }
};

// Actualizar tarea
export const updateTasks = async (req, res) => {
  const { id } = req.params;
  let { title, description, isComplete } = req.body;

  try {
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }

    if (title !== undefined) {
      if (!title.trim()) {
        return res.status(400).json({ msg: "El título no puede estar vacío" });
      }
      const existing = await Tasks.findOne({ where: { title } });
      if (existing && existing.id !== parseInt(id)) {
        return res.status(400).json({ msg: "Ese título ya está en uso" });
      }
    }

    if (description !== undefined && !description.trim()) {
      return res.status(400).json({ msg: "La descripción no puede estar vacía" });
    }

    if (isComplete !== undefined) {
      if (typeof isComplete === "string") {
        if (isComplete.toLowerCase() === "true") {
          isComplete = true;
        } else if (isComplete.toLowerCase() === "false") {
          isComplete = false;
        } else {
          return res.status(400).json({ msg: "isComplete debe ser true o false" });
        }
      } else if (typeof isComplete !== "boolean") {
        return res.status(400).json({ msg: "isComplete debe ser booleano" });
      }
    }

    await task.update({
      title: title ?? task.title,
      description: description ?? task.description,
      isComplete: isComplete ?? task.isComplete,
    });

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al actualizar la tarea" });
  }
};

// Eliminar tarea
export const deleteTasks = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Tasks.findByPk(id);

    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }

    await task.destroy();
    res.json({ msg: "Tarea eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al eliminar la tarea" });
  }
};
