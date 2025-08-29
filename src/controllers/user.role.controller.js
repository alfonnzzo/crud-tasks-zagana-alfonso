
import { UserRole } from "../models/user.role.model.js";
import { User } from "../models/users.model.js";

export const assignRole = async (req, res) => {
  const { user_id, role_id } = req.body;
  try {
    const userRole = await UserRole.create({ user_id, role_id });
    res.json(userRole);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserRoles = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findByPk(user_id, {
      include: [{ model: Roles, through: { attributes: [] } }],
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};