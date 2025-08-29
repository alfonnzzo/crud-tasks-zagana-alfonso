import { Roles } from "../models/role.model.js";
import { Users } from "../models/user.model.js";

export const createRol = async (req, res) => {
    const { name } = req.body;
    if (!name) 
        return res.status(400).json({ message: "Faltan rellenar campos obligatorios"});
    try {
        const exists = await Roles.findOne ({ where: { name }});
        if (exists)
            return res.status(400).json({ message: "El rol que quiere ingresar ya existe" });

        const role = await Roles.create({ name });
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ message: "error al crear un nuevo rol", error })
    }
}

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll({ 
        include: { model: User, 
        through: { 
            attributes: []
         } 
    } 
});
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ msg: "Error al traer roles", error });
  }
};