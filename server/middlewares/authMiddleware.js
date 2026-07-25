// 1. Cambia require por import
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // 1. Obtener el token del header "Authorization"
  const authHeader = req.headers['authorization'];

  // El formato suele ser: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  try {
    // 2. Verificar el token usando la clave secreta
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Inyectar los datos del usuario en el objeto "req"
    req.user = verified;

    // 4. Continuar al siguiente paso
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido o expirado." });
  }
};