import { userModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("createUser :: error al crear el usuario:", error);
    return res.status(500).json({ error: "Error interno al crear usuario" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.findAll();
    return res.status(200).json(allUser);
  } catch (error) {
    console.error("getAllUser :: error al listar usuarios:", error);
    return res.status(500).json({ error: "Error interno al listar usuarios" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("getUserById :: error al obtener usuario:", error);
    return res.status(500).json({ error: "Error interno al obtener usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await user.update(req.body);
    return res.status(200).json(user);
  } catch (error) {
    console.error("updateUser :: error al actualizar usuario:", error);
    return res.status(500).json({ error: "Error interno al actualizar usuario" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await user.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error("deleteUser :: error al eliminar usuario:", error);
    return res.status(500).json({ error: "Error interno al eliminar usuario" });
  }
};
