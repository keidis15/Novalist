import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="py-5 border-top" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div className="row">
          {/* Columna Izquierda: Branding y CTA */}
          <div className="col-lg-6 mb-4 mb-lg-0 border-end-lg">
            <div className="pe-lg-5">
              <h4
                className="fw-bold mb-4"
                style={{ color: "#023047", letterSpacing: "1px" }}
              >
                NOVALIST
              </h4>
              <p className="text-muted small fw-bold mb-2">
                Última actualización
              </p>
              <h2 className="fw-bold mb-3" style={{ color: "#023047" }}>
                ¿Listo para empezar?
              </h2>
              <p className="text-muted mb-0" style={{ maxWidth: "400px" }}>
                Optimiza tus procesos y toma el control total de tus
                herramientas en un solo lugar. Gestión inteligente para mentes
                ágiles.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Enlaces de Navegación */}
          <div className="col-lg-6">
            <div className="row ps-lg-5">
              {/* Productos */}
              <div className="col-6 mb-4">
                <h6 className="fw-bold mb-3" style={{ color: "#023047" }}>
                  Producto
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link
                      to="/inventario"
                      className="text-decoration-none text-muted small"
                    >
                      Inventario
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/finanza"
                      className="text-decoration-none text-muted small"
                    >
                      Finanzas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/notas"
                      className="text-decoration-none text-muted small"
                    >
                      Notas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/planificador"
                      className="text-decoration-none text-muted small"
                    >
                      Planificador
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Compañía */}
              <div className="col-6 mb-4">
                <h6 className="fw-bold mb-3" style={{ color: "#023047" }}>
                  Compañía
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link
                      to="/profile"
                      className="text-decoration-none text-muted small"
                    >
                      Mi Perfil
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/about"
                      className="text-decoration-none text-muted small"
                    >
                      Sobre nosotros
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/contact"
                      className="text-decoration-none text-muted small"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Copyright y Legal */}
              <div className="col-12 mt-4 pt-3 border-top">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0 x-small">
                    © 2024 — 2026 NovaList
                  </p>
                  <div>
                    <a
                      href="#"
                      className="text-decoration-none text-muted x-small me-3"
                    >
                      Privacidad
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-muted x-small"
                    >
                      Términos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
