import express from "express";
import transactionController from "../controllers/transactionController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.use(verifyToken);

router.get("/", transactionController.getTransactions);
router.get("/summary", transactionController.getChartData); // Ruta específica para el gráfico
router.post("/", transactionController.addTransaction);

export default router;
