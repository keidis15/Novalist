import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import "../assets/css/Finanzas.css";

export default function Finanzas() {
  // Datos para el gráfico
  const dataGrafico = [
    { name: "Lun", ingresos: 4000, egresos: 2400 },
    { name: "Mar", ingresos: 3000, egresos: 1398 },
    { name: "Mie", ingresos: 2000, egresos: 9800 },
    { name: "Jue", ingresos: 2780, egresos: 3908 },
    { name: "Vie", ingresos: 1890, egresos: 4800 },
    { name: "Sab", ingresos: 2390, egresos: 3800 },
    { name: "Dom", ingresos: 3490, egresos: 4300 },
  ];

  const [transacciones] = useState([
    {
      id: 1,
      concepto: "Venta Producto A",
      monto: 50000,
      tipo: "ingreso",
      fecha: "11 Abr",
    },
    {
      id: 2,
      concepto: "Pago Servidor VPS",
      monto: 15000,
      tipo: "egreso",
      fecha: "10 Abr",
    },
    {
      id: 3,
      concepto: "Suscripción Software",
      monto: 8000,
      tipo: "egreso",
      fecha: "09 Abr",
    },
  ]);

  const ingresos = transacciones
    .filter((t) => t.tipo === "ingreso")
    .reduce((acc, t) => acc + t.monto, 0);
  const egresos = transacciones
    .filter((t) => t.tipo === "egreso")
    .reduce((acc, t) => acc + t.monto, 0);
  const balance = ingresos - egresos;

  return (
    <div
      className="finanzas-container py-5 m-5"
      style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}
    >
      <div className="container">
        {/* Cabecera */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-0" style={{ color: "#023047" }}>
              Finanzas
            </h2>
            <p className="text-muted">
              Control de ingresos y egresos en tiempo real
            </p>
          </div>
          <button
            className="btn btn-lg text-white shadow-sm"
            style={{ backgroundColor: "#FB8500", borderRadius: "12px" }}
          >
            + Nuevo Movimiento
          </button>
        </div>
        {/* Sección del Gráfico */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
              <h5 className="fw-bold mb-4" style={{ color: "#023047" }}>
                Flujo de Caja Semanal
              </h5>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={dataGrafico}>
                    <defs>
                      <linearGradient
                        id="colorIngresos"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#219EBC"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#219EBC"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorEgresos"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#FB8500"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FB8500"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#eee"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#999", fontSize: 12 }}
                    />
                    <YAxis hide={true} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "10px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="ingresos"
                      stroke="#219EBC"
                      fillOpacity={1}
                      fill="url(#colorIngresos)"
                      strokeWidth={3}
                    />
                    <Area
                      type="monotone"
                      dataKey="egresos"
                      stroke="#FB8500"
                      fillOpacity={1}
                      fill="url(#colorEgresos)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="d-flex gap-4 mt-3 justify-content-center">
                <small className="text-muted">
                  <span style={{ color: "#219EBC" }}>●</span> Ingresos
                </small>
                <small className="text-muted">
                  <span style={{ color: "#FB8500" }}>●</span> Egresos
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Resumen de Cifras */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
              <span className="text-muted small fw-bold text-uppercase">
                Balance Total
              </span>
              <h2
                className={`fw-bold mt-2 ${balance >= 0 ? "text-success" : "text-danger"}`}
              >
                ${balance.toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
              <span className="text-muted small fw-bold text-uppercase">
                Ingresos
              </span>
              <h2 className="fw-bold mt-2 text-primary">
                ${ingresos.toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
              <span className="text-muted small fw-bold text-uppercase">
                Egresos
              </span>
              <h2 className="fw-bold mt-2 text-warning">
                ${egresos.toLocaleString()}
              </h2>
            </div>
          </div>
        </div>

        {/* Listado de Transacciones */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="px-4 py-3 border-0">Concepto</th>
                  <th className="py-3 border-0">Fecha</th>
                  <th className="py-3 border-0 text-end px-4">Monto</th>
                </tr>
              </thead>
              <tbody>
                {transacciones.map((t) => (
                  <tr key={t.id}>
                    <td className="px-4 py-3 fw-medium">
                      <span
                        className={`me-2 ${t.tipo === "ingreso" ? "text-success" : "text-danger"}`}
                      >
                        {t.tipo === "ingreso" ? "●" : "●"}
                      </span>
                      {t.concepto}
                    </td>
                    <td className="text-muted">{t.fecha}</td>
                    <td
                      className={`text-end px-4 fw-bold ${t.tipo === "ingreso" ? "text-success" : "text-danger"}`}
                    >
                      {t.tipo === "ingreso" ? "+" : "-"}$
                      {t.monto.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
