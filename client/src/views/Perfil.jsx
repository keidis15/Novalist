import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { user, loading } = useAuth();
  console.log("Usuario actual:", user); // Para depuración

  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 text-center">
              {/* Avatar genérico o inicial del usuario */}
              <div className="mb-3">
                <span 
                  className="badge rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center fs-2" 
                  style={{ width: "80px", height: "80px" }}
                >
                  {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
                </span>
              </div>

              <h3 className="card-title fw-bold mb-1">
                {user?.username || "Usuario"}
              </h3>
              <p className="text-muted mb-4">{user?.email || "correo@ejemplo.com"}</p>

              <hr />

              <div className="text-start">
                <h5 className="fw-semibold mb-3">Información de la Cuenta</h5>
                <div className="mb-2">
                  <strong>Nombre de Usuario:</strong> {user?.username}
                </div>
                <div className="mb-2">
                  <strong>Correo Electrónico:</strong> {user?.email}
                </div>
                <div className="mb-2">
                  <strong>Estado de Cuenta:</strong>{" "}
                  <span className="badge bg-success">Activo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
