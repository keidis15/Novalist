import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

// Usar rutas
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/inventory", inventoryRoutes);

app.get("/api/debug", (req, res) => {
  res.json({ message: "Express está vivo y respondiendo" });
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

