import { useState } from "react";
import "../assets/css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import client from "../api/axios"; // Importamos nuestra conexión

export default function Register() {
  const [formData, setFormData] = useState({username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      //Enviamos la petición POST al backend para registrar al usuario
      const response = await client.post("/api/users/register", formData);

      console.log("Usuario registrado con éxito:", response.data);
      alert("¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.");

      //=Redirigimos al usuario a la pantalla de Login
      navigate("/login");
    } catch (err) {
      console.error("Error al registrar:", err);
      // Capturamos el mensaje de error del backend (ej: "El correo ya está registrado")
      setError(
        err.response?.data?.message || "Ocurrió un error al registrarse.",
      );
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-sidebar"></div>

      <div className="auth-form-section">
        <div className="auth-card">
          <h2 className="fw-bold mb-4 p-3 text-dark">
            Bienvenidos a NovaList!
          </h2>
          <h2 className="fw-bold mb-2">Crear cuenta</h2>
          <p className="text-muted mb-4">
            Ingresa tus credenciales para registrarse.
          </p>
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-bold">Nombre de usuario</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Tu nombre de usuario"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-bold">Correo</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-bold">Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label
                className="form-check-label small text-muted"
                htmlFor="terms"
              >
                Aceptar terminos y condiciones.
              </label>
            </div>
            <button className="btn btn-dark btn-lg w-100 py-3 rounded-3 mt-3">
              Registrarse
            </button>
          </form>
          <div className="text-center p-3">
            <p className="small">
              Ya tienes cuenta?
              <Link to="/Login" className="fw-bold text-dark">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
