import React, { useState } from "react";
import "../assets/css/Inventario.css";

export default function Inventario() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Laptop Pro 15",
      categoria: "Electrónica",
      stock: 5,
      precio: 1200,
      imagen: "💻",
    },
    {
      id: 2,
      nombre: "Monitor 4K",
      categoria: "Electrónica",
      stock: 2,
      precio: 450,
      imagen: "🖥️",
    },
    {
      id: 3,
      nombre: "Teclado Mecánico",
      categoria: "Accesorios",
      stock: 15,
      precio: 80,
      imagen: "⌨️",
    },
    {
      id: 4,
      nombre: "Silla Ergonómica",
      categoria: "Muebles",
      stock: 0,
      precio: 250,
      imagen: "🪑",
    },
  ]);
  return (
    <div
      className="inventario-container py-5 m-5"
      style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}
    >
      <div className="container">
        {/* Encabezado Dinámico */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5">
          <div>
            <h2 className="fw-bold mb-0" style={{ color: "#023047" }}>
              Gestión de Inventario
            </h2>
            <p className="text-muted">
              Control de existencias y valorización de activos
            </p>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
            <button className="btn btn-outline-secondary rounded-pill px-4">
              Exportar
            </button>
            <button
              className="btn text-white shadow-sm px-4"
              style={{ backgroundColor: "#FB8500", borderRadius: "12px" }}
            >
              + Nuevo Producto
            </button>
          </div>
        </div>

        {/* Resumen Rápido */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3 rounded-4 text-center bg-white">
              <h4 className="fw-bold mb-0">{productos.length}</h4>
              <small className="text-muted">Productos Totales</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3 rounded-4 text-center bg-white">
              <h4 className="fw-bold mb-0 text-danger">
                {productos.filter((p) => p.stock <= 2).length}
              </h4>
              <small className="text-muted">Bajo Stock / Agotado</small>
            </div>
          </div>
        </div>

        {/* Cuadrícula de Productos */}
        <div className="row g-4">
          {productos.map((p) => (
            <div key={p.id} className="col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
                <div className="product-img-placeholder d-flex align-items-center justify-content-center bg-light py-5 fs-1">
                  {p.imagen}
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="fw-bold mb-0" style={{ color: "#023047" }}>
                      {p.nombre}
                    </h6>
                    <span className="badge bg-light text-muted fw-normal">
                      {p.categoria}
                    </span>
                  </div>
                  <h5 className="fw-bold text-primary mb-3">${p.precio}</h5>

                  <div className="d-flex align-items-center justify-content-between">
                    <span
                      className={`small fw-bold ${p.stock === 0 ? "text-danger" : p.stock <= 3 ? "text-warning" : "text-success"}`}
                    >
                      {p.stock === 0 ? "Agotado" : `Stock: ${p.stock} unidades`}
                    </span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pb-3 text-center">
                  <button className="btn btn-sm btn-outline-primary w-100 rounded-pill">
                    Editar detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
