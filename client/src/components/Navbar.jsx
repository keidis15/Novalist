import React from "react";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import  "../assets/css/NavBar.css"

export default function Navbar() {
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
              <Link className="nav-link " to="/inventario">
                Inventario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/finance">
                Finanza
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/note">
                Notas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/planificador">
                Planificador
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
             <Link className="nav-link" to="/profile">
                Perfil
              </Link>
            </li> <li className="nav-item ms-lg-3">
             <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
             <li className="nav-item ms-lg-3">
             <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
