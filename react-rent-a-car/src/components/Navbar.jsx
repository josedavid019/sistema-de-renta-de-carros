// src/components/Navbar.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Al envolver el logo en <a> con href="/" se redirige al home */}
        <a href="/home">
          <img
            src="/Logo empresa.png"
            alt="Logo de la empresa"
            className="navbar-logo"
          />
        </a>
      </div>
      <div className="navbar-right">
        {location.pathname !== "/catalogo" && location.pathname !== "/login" && location.pathname !== "/register" && (
          <>
            <a href="/catalogo">Catálogo Carros</a>
            <a href="#reservas">Mis Reservas</a>
          </>
        )}
        <div className="navbar-login">
          {location.pathname !== "/login" && <a href="/login">Iniciar Sesión</a>}
          {location.pathname !== "/login" && location.pathname !== "/register" && (
            <>
              <span> |</span>
            </>
          )}
          {location.pathname !== "/register" && <a href="/register">Registrarse</a>}
        </div>
      </div>
    </nav>
  );
};
