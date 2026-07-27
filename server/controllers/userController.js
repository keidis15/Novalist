import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // 1. Ciberseguridad: Hashear contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 2. Guardar en DB
    const newUser = await User.create(username, email, hashedPassword);

    res.status(201).json({ message: "Usuario creado", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al registrar usuario (posible email duplicado)" });
  }
};

// Ruta de verificación si el token es válido
const getUserProfile = async (req, res) => {
  try {
    // Buscamos el usuario en PostgreSQL usando el ID desglosado por el middleware (req.user.id)
    const userFound = await User.findById(req.user.id);

    if (!userFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Devolvemos el payload limpio para el Perfil.jsx
    return res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
      role: userFound.role || "Usuario",
      avatar: userFound.avatar || null,
      joined: userFound.created_at || userFound.createdAt, // PostgreSQL suele usar created_at
    });
  } catch (error) {
    console.error("Error en getUserProfile:", error);
    res.status(500).json({ message: "Error interno al obtener el perfil" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("¡He recibido una petición de login!");
  console.log("Cuerpo de la petición:", req.body);

  try {
    const user = await User.findByEmail(email);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    // 3. Verificar contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    // 4. Generar Token de Seguridad (JWT)
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // Devolvemos el token y un objeto user con la estructura correcta
    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export { register, login, getUserProfile };