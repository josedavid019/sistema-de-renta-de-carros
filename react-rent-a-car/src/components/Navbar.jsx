// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Al envolver el logo en <a> con href="/" se redirige al home */}
        <a href="/">
          <img
            src="/Logo empresa.png" 
            alt="Logo de la empresa"
            className="navbar-logo"
          />
        </a>
      </div>
      <div className="navbar-right">
        <a href="#catalogo">Catálogo Carros</a>
        <a href="#reservas">Mis Reservas</a>
        <a href="#login" className="navbar-login">
          <i className="fa fa-user" /> Iniciar Sesión
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
