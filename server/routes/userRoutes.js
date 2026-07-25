import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { getUserProfile, login, register } from "../controllers/userController.js";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("¡La ruta de usuarios funciona!");
});

// Rutas públicas y protegidas
router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyToken, getUserProfile);

// Exportamos la variable 'router' (con 'r' al final)
export default router;
