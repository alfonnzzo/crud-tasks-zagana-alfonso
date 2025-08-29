import { Router } from "express";
import { createDocumento, getAllDocumentos } from "../controllers/document.controller.js";

const router = Router()

router.post("/nuevo-documento", createDocumento);
router.get("/documentos", getAllDocumentos);

export default router;