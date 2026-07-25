//const router = require('express').Router();
import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import  noteController  from "../controllers/noteController.js";
const router = express.Router();

// Esta ruta es PROTEGIDA: solo usuarios logueados pueden ver sus notas
// router.get('/', verifyToken, noteController.getUserNotes);

// Esta ruta también es PROTEGIDA para crear notas
// router.post('/', verifyToken, noteController.createNote);

// Todas estas rutas requieren estar logueado
router.use(verifyToken);

router.get("/", noteController.getUserNotes);
router.post("/", noteController.createNote);
router.delete("/:id", noteController.deleteNote);

export default router;
