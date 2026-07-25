import React from "react";
import inventarioImg from "../assets/imgs/inventario.jpg"
import finanzaImg from "../assets/imgs/finanza.jpg"
import planificadorImg from "../assets/imgs/planificador.jpg"
import notasImg from "../assets/imgs/notasImg (2).jpg"
import "../assets/css/PublicContent.css"

export default function PublicContent() {
  return (
    <div className="container py-5">
        <h2 className="text-center display-5 p-4">En NovaList podras gestionar:  </h2>
      {/* Sección Inventario */}
      <div className="row align-items-center mb-5 py-4  shadow-sm">
        <div className="col-md-6 ">
          <img
            src={inventarioImg}
            className="img-fluid rounded-4 shadow img-public"
            alt="Inventario"
          />
        </div>
        <div className="col-md-6 p-5">
          <h2 className="fw-bold display-5" style={{ color: "#023047" }}>
            Inventario
          </h2>
          <p className="text-muted fs-5">
            Gestiona tus existencias de forma inteligente. Recibe alertas
            automáticas y mantén el control total de tus productos.
          </p>
          <button
            className="btn btn-lg text-white px-4"
            style={{ backgroundColor: "#FB8500" }}
          >
            Saber más
          </button>
        </div>
      </div>

      {/* Sección Finanzas - Imagen a la derecha (order-md-last) */}
      <div className="row align-items-center mb-5 py-4 flex-md-row-reverse shadow-sm">
        <div className="col-md-6">
          <img
            src={finanzaImg}
            className="img-fluid rounded-4 shadow img-public"
            alt="Finanzas"
          />
        </div>
        <div className="col-md-6 p-5 public-module">
          <h2 className="fw-bold display-5" style={{ color: "#023047" }}>
            Finanzas
          </h2>
          <p className="text-muted fs-5">
            Visualiza tus ingresos y egresos. Novalist te ayuda a entender la
            salud financiera de tu proyecto con gráficos claros.
          </p>
          <ul className="list-unstyled mb-4">
            <li>
              <i className="bi bi-check-circle-fill text-primary"></i> Reportes
              detallados
            </li>
            <li>
              <i className="bi bi-check-circle-fill text-primary"></i> Control
              de gastos diario
            </li>
          </ul>
          <button
            className="btn btn-lg text-white px-4"
            style={{ backgroundColor: "#FB8500" }}
          >
            Explorar
          </button>
        </div>
      </div>

       {/* Sección Planificador */}
      <div className="row align-items-center mb-5 py-4 shadow-sm">
        <div className="col-md-6">
          <img
            src={planificadorImg}
            className="img-fluid rounded-4 shadow img-public"
            alt="Inventario"
          />
        </div>
        <div className="col-md-6 p-5">
          <h2 className="fw-bold display-5" style={{ color: "#023047" }}>
            Planificador
          </h2>
          <p className="text-muted fs-5">
            Planifica tus tareas y actividades de forma inteligente. Recibe alertas
            automáticas y mantén el control de tu dia a dia.
          </p>
          <button
            className="btn btn-lg text-white px-4"
            style={{ backgroundColor: "#FB8500" }}
          >
            Saber más
          </button>
        </div>
      </div>

      {/* Sección Notas */}
      <div className="row align-items-center mb-5 py-4 flex-md-row-reverse shadow-sm">
        <div className="col-md-6">
          <img
            src={notasImg}
            className="img-fluid rounded-4 shadow img-public"
            alt="Finanzas"
          />
        </div>
        <div className="col-md-6 p-5 public-module">
          <h2 className="fw-bold display-5" style={{ color: "#023047" }}>
            Mis Notas
          </h2>
          <p className="text-muted fs-5">
            Visualiza tus ingresos y egresos. Novalist te ayuda a entender la
            salud financiera de tu proyecto con gráficos claros.
          </p>
          <button
            className="btn btn-lg text-white px-4"
            style={{ backgroundColor: "#FB8500" }}
          >
            Explorar
          </button>
        </div>
      </div>

    </div>
  );
}
