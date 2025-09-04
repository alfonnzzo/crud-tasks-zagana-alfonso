import User from "../models/user.model.js";
import Role from "../models/role.model.js";
import UserRole from "../models/user.role.model.js";

// Asignar un rol a un usuario
export const assignRole = async (req, res) => {
  try {
    const { user_id, role_id } = req.body;
    if (!user_id || !role_id) {
      return res.status(400).json({ error: "user_id y role_id son obligatorios" });
    }

    const userRole = await UserRole.create({ user_id, role_id });
    return res.status(201).json(userRole);
  } catch (error) {
    console.error("assignRole :: error al asignar rol:", error);
    return res.status(500).json({ error: "Error interno al asignar rol" });
  }
};

// Obtener roles de un usuario
export const getUserRoles = async (req, res) => {
  try {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: [
        {
          model: Role,
          through: { attributes: [] }, // Oculta la tabla intermedia
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("getUserRoles :: error al obtener roles del usuario:", error);
    return res.status(500).json({ error: "Error interno al obtener roles" });
  }
};
