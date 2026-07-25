import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { useAuth } from "../context/AuthContext.jsx";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate("/profile");
    } else {
      alert(result.error);
    }
  };
  return (
    <div className="auth-container">
      {/* Lado Izquierdo */}
      <div className="auth-sidebar"></div>

      {/* Lado Derecho */}
      <div className="auth-form-section">
        <div className="auth-card">
          <h2 className="fw-bold mb-4 m-3">Bienvenidos a NovaList!</h2>
          <p className="text-muted mb-4">
            Ingresa tus credenciales para continuar.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-bold">Correo</label>
              <input
                type="email"
                className="form-control form-control-lg bg-light border-0"
                placeholder="Ingrese tu correo"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-bold">Contraseña</label>
              <input
                type="password"
                className="form-control form-control-lg bg-light border-0"
                placeholder="Ingrese su contraseña"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <div className="text-end mt-1">
                <a href="#" className="text-decoration-none small text-muted">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <button className="btn btn-dark btn-lg w-100 mb-4 py-3 rounded-3 mt-3">
              Iniciar sesion
            </button>
          </form>

          <div className="text-center">
            <p className="small">
              No tienes cuenta?
              <Link to="/register" className="fw-bold text-dark">
                Registrarse
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
