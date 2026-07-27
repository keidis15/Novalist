import React from "react";
import { Button } from "bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "../assets/css/NavBar.css";

export default function Navbar() {
  //consumimos el estado local de autenticacion
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-custom bg-light mb-0  navbar-expand-lg  shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-primary">NOVA</span>LIST
        </Link>
        <button
          className="navbar-toggler btn-nova"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Nosotros
              </Link>
            </li>

            {/* RUTAS QUE SOLO SE MUESTRAN SI ESTÁ LOGUEADO */}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/planificador">
                    Planificador
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/note">
                    Notas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/finance">
                    Finanzas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inventario">
                    Inventario
                  </Link>
                </li>
              </>
            )}

          </ul>
          {/* BOTONES SEGÚN EL ESTADO DE SESIÓN */}
          <div className="d-flex align-items-center gap-2">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="btn btn-outline-light btn-sm">
                  👤 {user?.username || "Mi Perfil"}
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary btn-sm">
                  Iniciar Sesión
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
