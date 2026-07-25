import express from "express";
import taskController from "../controllers/taskController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Aplicamos seguridad global a todas las rutas de tareas
router.use(verifyToken);

router.get('/', taskController.getUserTasks);
router.post('/', taskController.createTask);
router.delete('/:id', taskController.deleteTask);

export default router;