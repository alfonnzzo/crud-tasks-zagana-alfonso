import Person from "../models/person.model.js";

// Crear persona
export const createPerson = async (req, res) => {
  const { firstName, lastName, age, email } = req.body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
    return res.status(400).json({ msg: "firstName, lastName y email son obligatorios" });
  }

  try {
    const exists = await Person.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ msg: "El email ya está registrado" });
    }

    const person = await Person.create({ firstName, lastName, age, email });
    return res.status(201).json(person);
  } catch (error) {
    console.error("createPerson :: error al crear persona:", error);
    return res.status(500).json({ msg: "Error al crear la persona", error });
  }
};

// Obtener todas las personas
export const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    return res.status(200).json(persons);
  } catch (error) {
    console.error("getAllPersons :: error al listar personas:", error);
    return res.status(500).json({ msg: "Error al listar las personas", error });
  }
};

// Obtener persona por ID
export const getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ msg: "Persona no encontrada" });
    }
    return res.status(200).json(person);
  } catch (error) {
    console.error("getPersonById :: error al obtener persona:", error);
    return res.status(500).json({ msg: "Error al obtener la persona", error });
  }
};

// Actualizar persona
export const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email } = req.body;

  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ msg: "Persona no encontrada" });
    }

    if (email) {
      const exists = await Person.findOne({ where: { email } });
      if (exists && exists.id !== parseInt(id)) {
        return res.status(400).json({ msg: "Ese email ya está en uso" });
      }
    }

    await person.update({
      firstName: firstName ?? person.firstName,
      lastName: lastName ?? person.lastName,
      age: age ?? person.age,
      email: email ?? person.email,
    });

    return res.status(200).json(person);
  } catch (error) {
    console.error("updatePerson :: error al actualizar persona:", error);
    return res.status(500).json({ msg: "Error al actualizar la persona", error });
  }
};

// Eliminar persona
export const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ msg: "Persona no encontrada" });
    }

    await person.destroy();
    return res.json({ msg: "Persona eliminada" });
  } catch (error) {
    console.error("deletePerson :: error al eliminar persona:", error);
    return res.status(500).json({ msg: "Error al eliminar la persona", error });
  }
};
