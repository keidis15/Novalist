import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Soporte Técnico",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (Firebase, EmailJS, o tu propio Backend)
    console.log("Datos seguros enviados:", formData);
    alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
  };
  return (
    <div className="contact-page animate__animated animate__fadeIn">
      {/* Header */}
      <section className="py-5 text-center bg-light border-bottom">
        <div className="container py-3">
          <h1 className="fw-bold display-4" style={{ color: "#023047" }}>
            Contáctanos
          </h1>
          <p className="text-muted fs-5">
            ¿Tienes dudas o feedback? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Información de contacto */}
            <div className="col-lg-4">
              <div
                className="p-4 rounded-4 shadow-sm h-100"
                style={{ backgroundColor: "#023047", color: "white" }}
              >
                <h3 className="fw-bold mb-4">Información</h3>
                <div className="mb-4">
                  <p className="mb-1 fw-bold text-info">Email</p>
                  <p>soporte@novalist.com</p>
                </div>
                <div className="mb-4">
                  <p className="mb-1 fw-bold text-info">Ubicación</p>
                  <p>Santiago, Chile</p>
                </div>
                <div className="mt-5">
                  <h5 className="mb-3">Síguenos</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-white fs-4">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-white fs-4">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4 rounded-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Nombre</label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="Tu nombre"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="correo@ejemplo.com"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Asunto</label>
                    <select
                      className="form-select form-select-lg bg-light border-0"
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option>Soporte Técnico</option>
                      <option>Consultas de Seguridad</option>
                      <option>Feedback de Usuario</option>
                      <option>Otros</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Mensaje</label>
                    <textarea
                      className="form-control bg-light border-0"
                      rows="5"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-lg px-5 py-3 text-white fw-bold shadow-sm"
                      style={{
                        backgroundColor: "#FB8500",
                        borderRadius: "12px",
                      }}
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
