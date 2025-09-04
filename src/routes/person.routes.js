import { Router } from "express";
import { 
    createPerson,
    getAllPersons,
    getPersonById,
    deletePerson,
    updatePerson
 } from "../controllers/person.controller.js";

 const personRoutes = Router();

 personRoutes.post("/person", createPerson);
 personRoutes.get("/person", getAllPersons);
 personRoutes.put("/person/:id", updatePerson);
 personRoutes.get("/person/:id", getPersonById);
 personRoutes.delete("/person/:id", deletePerson);

 export default personRoutes;