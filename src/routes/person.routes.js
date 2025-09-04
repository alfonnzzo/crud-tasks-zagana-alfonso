import { Router } from "express";
import { 
    createPerson,
    getAllPersons,
    getPersonById,
    deletePerson,
    updatePerson
 } from "../controllers/person.controller.js";1
import {
    createPersonValidation,
    deletePersonValidation,
    getPersonByIdValidation,
    updatePersonValidation
} from "../middlewares/validations/person.validations.js"

 const personRoutes = Router();

 personRoutes.post("/person", createPersonValidation, createPerson);
 personRoutes.get("/person", getAllPersons);
 personRoutes.put("/person/:id", updatePersonValidation, updatePerson);
 personRoutes.get("/person/:id", getPersonByIdValidation, getPersonById);
 personRoutes.delete("/person/:id", deletePersonValidation, deletePerson);

 export default personRoutes;