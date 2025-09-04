import { body, param } from "express-validator";

// Validación para crear una persona
export const createPersonValidation = [
  body("first_name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ max: 50 }).withMessage("El nombre no puede superar los 50 caracteres"),

  body("last_name")
    .notEmpty().withMessage("El apellido es obligatorio")
    .isLength({ max: 50 }).withMessage("El apellido no puede superar los 50 caracteres"),

  body("email")
    .notEmpty().withMessage("El correo electrónico es obligatorio")
    .isEmail().withMessage("Debe ser un correo electrónico válido"),

  body("birth_date")
    .notEmpty().withMessage("La fecha de nacimiento es obligatoria")
    .isISO8601().withMessage("La fecha de nacimiento debe estar en formato válido (YYYY-MM-DD)")
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser en el futuro");
      }
      return true;
    }),

  body("phone_number")
    .optional()
    .isMobilePhone("es-AR").withMessage("El número de teléfono debe ser válido para Argentina")
];

// Validación para actualizar una persona
export const updatePersonValidation = [
  param("id")
    .isInt().withMessage("El ID de la persona debe ser un número válido"),

  body("first_name")
    .optional()
    .isLength({ max: 50 }).withMessage("El nombre no puede superar los 50 caracteres"),

  body("last_name")
    .optional()
    .isLength({ max: 50 }).withMessage("El apellido no puede superar los 50 caracteres"),

  body("email")
    .optional()
    .isEmail().withMessage("Debe ser un correo electrónico válido"),

  body("birth_date")
    .optional()
    .isISO8601().withMessage("La fecha de nacimiento debe estar en formato válido (YYYY-MM-DD)")
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser en el futuro");
      }
      return true;
    }),

  body("phone_number")
    .optional()
    .isMobilePhone("es-AR").withMessage("El número de teléfono debe ser válido para Argentina")
];

// Validación para eliminar una persona
export const deletePersonValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número válido")
];

// Validación para obtener una persona por ID
export const getPersonByIdValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número válido")
];
