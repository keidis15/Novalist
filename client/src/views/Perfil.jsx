import React, { useEffect } from "react";
import "../assets/css/Perfil.css";
import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { user, loading, logout } = useAuth();

  useEffect(() => {
  console.log("Datos actuales del usuario:", user);
}, [user]);

// Si está cargando, muestra un spinner o mensaje
  if (loading) return <div className="text-center m-5">Cargando...</div>;

  // Si no hay usuario después de cargar, redirigir o mostrar error
  if (!user) {
    return (
      <div className="container m-5 p-5">
        <p>No se pudo cargar la sesión. Por favor, inicia sesión de nuevo.</p>
      </div>
    );
  }

  // 1. Manejo de carga para evitar el error de "null"
  //if (loading) return <p>Cargando perfil...</p>;
  //if (!user) return <p>No hay sesión activa.</p>;

  // 2. Función para obtener iniciales (ej: "Marcos" -> "M")
  const getInitial = (name) => {
    if (!name) return "U"; // 'U' de Usuario por defecto
    return name.charAt(0).toUpperCase();
  };


  return (
    <div className="m-5">
      <div
        className="perfil-container py-5"
        style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row g-4">
            {/* Columna Izquierda: Tarjeta de Identidad */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 text-center p-4 bg-white">
                <div className="position-relative d-inline-block mx-auto mb-3">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt="Perfil"
                      className="avatar-img"
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      {getInitial(user.username)}
                    </div>
                  )}
                  <button className="btn btn-sm btn-dark position-absolute bottom-0 end-0 rounded-circle">
                    ✎
                  </button>
                </div>
                <h4 className="fw-bold mb-0" style={{ color: "#023047" }}>
                  {user.username}
                </h4>
                <p className="text-muted small">{user.role}</p>

                <hr className="my-4 opacity-50" />

                <div className="text-start">
                  <div className="mb-3">
                    <label className="text-muted small d-block">Email</label>
                    <span className="fw-medium">{user.email}</span>
                  </div>
                  <div className="mb-3">
                    <label className="text-muted small d-block">
                      Miembro desde
                    </label>
                    <span className="fw-medium">{user.joined}</span>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="btn btn-outline-danger w-100 mt-4 rounded-pill"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>

            {/* Columna Derecha: Configuración y Actividad */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
                <h5 className="fw-bold mb-4" style={{ color: "#023047" }}>
                  Configuración de la Cuenta
                </h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">
                        Nombre de Usuario
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        defaultValue={user.username}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        defaultValue={user.email}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <h6 className="fw-bold">Cambiar Contraseña</h6>
                      <p className="text-muted small">
                        Deja en blanco si no deseas cambiarla.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control bg-light border-0"
                        placeholder="Nueva contraseña"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control bg-light border-0"
                        placeholder="Confirmar contraseña"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn text-white px-5 rounded-pill"
                      style={{ backgroundColor: "#219EBC" }}
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              </div>

              {/* Resumen de Actividad (Vinculado a tus otros módulos) */}
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                    <h3 className="fw-bold" style={{ color: "#FB8500" }}>
                      12
                    </h3>
                    <small className="text-muted">Notas Creadas</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                    <h3 className="fw-bold" style={{ color: "#219EBC" }}>
                      5
                    </h3>
                    <small className="text-muted">Tareas de Hoy</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                    <h3 className="fw-bold" style={{ color: "#023047" }}>
                      8
                    </h3>
                    <small className="text-muted">Items Inventario</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
