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

//ruta de verificacion si el token es valido
const getUserProfile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id).select("-password");
    if (!userFound) return res.status(404).json({ message: "No encontrado" });

    // ESTE ES EL PAYLOAD COMPLETO
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role: userFound.role || "Usuario",
      avatar: userFound.avatar,
      joined: userFound.createdAt, // Lo que pide tu Perfil.jsx
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

    res.json({ message: "Login exitoso", token, username: user.username });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export { register, login, getUserProfile };
