import React from "react";
import { useState } from "react";
import Hero from "../components/Hero";
import PublicContent from "../components/PublicContent";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Cambia a true para ver el Dashboard
  if (isLoggedIn) {
    return (
      <div className="container py-5">
        <h2 className="mb-4">Panel de Control</h2>
        <div className="row g-4">
          {/* Card: Stock Crítico */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-3">
              <div className="card-body">
                <h5 className="fw-bold">📦 Stock Crítico</h5>
                <p className="text-danger small">
                  Hay 5 productos con stock bajo.
                </p>
                <Link to="/inventario" className="btn btn-sm btn-primary">
                  Gestionar
                </Link>
              </div>
            </div>
          </div>
          {/* Card: Agenda */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-3">
              <div className="card-body">
                <h5 className="fw-bold">📅 Para hoy</h5>
                <p className="text-muted small">
                  Tienes 2 tareas pendientes en tu planificador.
                </p>
                <Link to="/planificador" className="btn btn-sm btn-primary">
                  Ver Agenda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si no está logueado, retorna el Hero + PublicContent
  return (
    <>
      <Hero />
      <PublicContent /> {/* Aquí metes el código de las secciones de arriba */}
    </>
  );
}
