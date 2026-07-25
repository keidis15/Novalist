import { Pool } from "pg";
import dotenv from "dotenv";

// Cargar las variables del archivo .env
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then((client) => {
    console.log("✅ Conectado exitosamente a la base de datos Neon (PostgreSQL)");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Error al conectar con Neon:", err.message);
  });

export default pool;