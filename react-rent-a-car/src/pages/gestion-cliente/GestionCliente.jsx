// src/pages/GestionCliente.jsx
import React, { useState } from "react";
import "./GestionCliente.css";
import { ModalCliente } from "../../components/modal-cliente/ModalCliente";

export function GestionCliente() {
  const [documento, setDocumento] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);

  const handleBuscar = (e) => {
    e.preventDefault();
    if (documento.trim()) {
      setModalAbierto(true);
    }
  };

  return (
    <div className="gestion-cliente-container">
      <div className="gestion-cliente-content">
        <h1>Gestión de Cliente</h1>

        {/* Barra de búsqueda */}
        <form className="buscar-form" onSubmit={handleBuscar}>
          <div className="input-group">
            <label className="floating-label" htmlFor="documentoBusqueda">
              Número de documento*
            </label>
            <div className="search-input">
              <input
                type="text"
                id="documentoBusqueda"
                className="floating-input"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                placeholder=""
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>
          <button type="submit" className="buscar-btn">
            Buscar
          </button>
        </form>

        {/* Modal emergente */}
        <ModalCliente
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
        />
      </div>
    </div>
  );
};
