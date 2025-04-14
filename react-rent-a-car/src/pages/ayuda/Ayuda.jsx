import React, { useState } from "react";
import "./Ayuda.css";

export function Ayuda() {
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="ayuda-container">
      <h1>Ayuda</h1>
      {!submitted ? (
        <form className="ayuda-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo Electronico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="descripcion">Descripcion del problema:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div className="ayuda-confirmation">
          <p>
            Uno de nuestros tecnicos se pondra en contacto con usted a traves de
            su correo.
          </p>
        </div>
      )}
    </div>
  );
}
