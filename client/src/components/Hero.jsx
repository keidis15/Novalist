import React from "react";
import heroImage from "../assets/imgs/heroNaList.jpg";
import { Link } from "react-router-dom";
import "../assets/css/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section bg-white shadow-sm"style={{ backgroundColor: "#f8fafc", zIndex: 1 }}>
      <div className="container-fluid px-0">
        <div
          className="row g-0 align-items-center hero-modulos"
          style={{ minHeight: "80vh" }}
        >
          <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center text-start">
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <h1
                className="display-3 fw-bold mb-4 mt-0"
                style={{ color: "#023047" }}
              >
                Novalist
              </h1>

              <p className="lead fs-3 text-muted mb-5 fw-normal">
                Bienvenido a tu sistema de gestión modular. Desde aquí puedes
                monitorear tus operaciones diarias.
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to="/planificador"
                  className="btn btn-primary btn-lg px-5  fs-5 fw-medium text-white shadow-sm border-0"
                  style={{ backgroundColor: "#FB8500" }}
                >
                  Descubre más
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 order-1 order-lg-2"
            style={{ height: '80vh', minHeight: '300px', position: 'relative' }}
          >
            <img
              src={heroImage}
              alt="Novalist Planificador"
              className="w-100 h-100 object-fit-cover"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
