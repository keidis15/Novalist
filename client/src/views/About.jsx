import React from "react";
import Hero from "../components/Hero";
import sobreMiImg from "../assets/imgs/sobremi.jpg"

export default function About() {
  return (
    <div className="about-page bg-white">
      <Hero/>
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#023047", color: "white" }}
      >
        <div className="container py-4">
          <h1 className="display-4 fw-bold">Nuestra Misión</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Simplificar la gestión operativa mediante herramientas modulares,
            seguras y centradas en el usuario.
          </p>
        </div>
      </section>

      {/* Sección Quiénes Somos */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4" style={{ color: "#023047" }}>
                ¿Qué es NovaList?
              </h2>
              <p className="text-muted fs-5">
                NovaList nació como una solución integral para profesionales y
                empresas que necesitan organizar su flujo de trabajo sin la
                complejidad de los sistemas tradicionales.
              </p>
              <p className="text-muted fs-5">
                Combinamos lo mejor del <strong>desarrollo Full Stack</strong>{" "}
                con la robustez de la <strong>ciberseguridad</strong> para
                ofrecer una plataforma donde tus datos están protegidos y tu
                productividad es la prioridad.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="p-3 bg-light rounded-4 shadow-sm text-center">
                <img
                  src={sobreMiImg}
                  alt="Equipo Novalist"
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nuestros Valores (Cards) */}
      <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#023047" }}>
            Nuestros Pilares
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-3">
                  <span className="fs-1">🛡️</span>
                </div>
                <h4 className="fw-bold" style={{ color: "#219EBC" }}>
                  Seguridad
                </h4>
                <p className="text-muted">
                  Implementamos estándares de seguridad para que tu información
                  financiera y personal esté siempre resguardada.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-3">
                  <span className="fs-1">⚡</span>
                </div>
                <h4 className="fw-bold" style={{ color: "#FB8500" }}>
                  Agilidad
                </h4>
                <p className="text-muted">
                  Basados en metodologías ágiles, nuestra interfaz permite una
                  gestión rápida y sin fricciones en el día a día.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-3">
                  <span className="fs-1">🧩</span>
                </div>
                <h4 className="fw-bold" style={{ color: "#023047" }}>
                  Modularidad
                </h4>
                <p className="text-muted">
                  Usa solo lo que necesites. Desde notas simples hasta
                  inventarios complejos, NovaList se adapta a ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 text-center bg-white border-top">
        <div className="container">
          <h3 className="fw-bold mb-4">
            ¿Quieres saber más sobre nuestra tecnología?
          </h3>
          <button
            className="btn btn-lg text-white px-5 py-3"
            style={{ backgroundColor: "#FB8500", borderRadius: "50px" }}
          >
            Ver Documentación
          </button>
        </div>
      </section>
    </div>
  );
}
