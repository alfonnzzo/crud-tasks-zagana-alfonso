import userRole from "../models/user.role.model.js";

//crear
export const assignRole = async (req, res) => {
  const { user_id, role_id } = req.body;
  try {
    const user_role = await userRole.create({ user_id, role_id });
    res
    .json(user_role);

  } catch (err) {
    res
    .status(500)
    .json({ error: err.message });
  }
};

//traer todos 
export const getUserRole = async (req, res) => {
  try {
          const role = await userRole.findAll();
      res
      .status(200)
      .json(role);
    } catch (error) {
      res
      .status(500)
      .json({ msg: "Error al traer los usuarios y roles", error });
    }
};

//traer por id 
export const getRoleById = async (req, res) => {
    const id = Number(req.params.id);
    try {
            const role = await userRole.findByPk(req.params.id);
            res
            .json(role)
        } catch (error) {
            res
            .status(500)
            .json({ messsage: "Error al buscar ese id"});
        }
};