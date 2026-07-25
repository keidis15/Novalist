import React, { useState } from "react";
import "../assets/css/Planificador.css";

export default function Planificador() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      titulo: "Reunión de Diseño",
      hora: "09:00",
      categoria: "Trabajo",
      color: "#E3F2FD",
    },
    {
      id: 2,
      titulo: "Revisión de Inventario",
      hora: "11:30",
      categoria: "Tienda",
      color: "#FFF3E0",
    },
    {
      id: 3,
      titulo: "Gimnasio",
      hora: "18:00",
      categoria: "Personal",
      color: "#F1F8E9",
    },
  ]);
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const finDeSemana = ["Sábado", "Domingo"];

  // Función para renderizar una columna de día
  const ColumnaDia = (dia, esFinDeSemana = false) => (
    <div
      key={dia}
      className={esFinDeSemana ? "col-lg-6 col-12" : "col-lg col-md-6 col-12"}
    >
      <div
        className={`card border-0 shadow-sm rounded-4 h-100 ${esFinDeSemana ? "bg-white border-top border-4 border-warning" : ""}`}
      >
        <div className="card-header bg-white border-0 pt-3 fw-bold text-center">
          {dia}
        </div>
        <div className="card-body p-2 min-vh-25">
          {tareas
            .filter((t) => t.dia === dia)
            .map((tarea) => (
              <div
                key={tarea.id}
                className="tarea-card p-3 mb-2 rounded-3 border-start border-4 shadow-sm"
                style={{
                  backgroundColor: tarea.color,
                  borderLeftColor: "#FB8500",
                }}
              >
                <small className="text-muted d-block">{tarea.hora}</small>
                <span className="fw-bold d-block text-truncate">
                  {tarea.titulo}
                </span>
              </div>
            ))}
          {/* Espacio vacío para indicar que se pueden soltar tareas aquí */}
          <div className="text-center py-3 text-muted small opacity-50 border-dashed rounded-3 mt-2">
            +
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="planificador-container mt-5 py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold" style={{ color: "#023047" }}>
            Mi Planificador
          </h2>
          <button
            className="btn btn-primary rounded-pill px-4"
            style={{ backgroundColor: "#FB8500", border: "none" }}
          >
            + Nueva Tarea
          </button>
        </div>

        {/* Grid del Calendario (Días de la semana) */}
        <div className="row g-3">
          {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((dia) => (
            <div key={dia} className="col-lg col-md-4 col-12">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-header bg-white border-0 pt-3 fw-bold text-center">
                  {dia}
                </div>
                <div className="card-body p-2 min-vh-50">
                  {/* Aquí mapeamos las tareas que correspondan a este día */}
                  {tareas.map((tarea) => (
                    <div
                      key={tarea.id}
                      className="tarea-card p-3 mb-2 rounded-3 border-start border-4"
                      style={{
                        backgroundColor: tarea.color,
                        borderLeftColor: "#FB8500",
                      }}
                    >
                      <small className="text-muted d-block">{tarea.hora}</small>
                      <span className="fw-bold d-block text-truncate">
                        {tarea.titulo}
                      </span>
                      <span
                        className="badge bg-white text-dark mt-2"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {tarea.categoria}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fila 2: Fin de Semana */}
        <div className="row g-3">
          <div className="col-12">
            <h5 className="text-muted fw-bold m-3">Fin de semana</h5>
          </div>
          {finDeSemana.map((dia) => ColumnaDia(dia, true))}
        </div>
      </div>
    </div>
  );
}
