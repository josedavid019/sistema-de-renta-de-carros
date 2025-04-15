import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavbarEmployee.css";

export function NavbarEmployee() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Obtenemos el rol almacenado en el login
  const role = localStorage.getItem("role"); // "admin" o "employee"

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Si fuera necesario borrar tokens u otros datos, se hace aqui
    localStorage.removeItem("role");
    navigate("/home");
  };

  return (
    <nav className="navbar-emp">
      <div className="navbar-emp-left">
        <img src="/Logo empresa.png" alt="Logo" className="logo-emp" />
      </div>
      <div className="navbar-emp-right">
        {/* Enlaces para empleados/administradores */}
        <Link to="/historial-reservas" className="emp-link">
          Historial de Reservas
        </Link>
        <div className="emp-notification-icon">🔔</div>
        <div className="emp-profile" onClick={handleToggleMenu}>
          {/* Mostramos "AD" si es admin o "EM" si es empleado */}
          <div className="emp-initials">{role === "admin" ? "AD" : "EM"}</div>
          <div className="emp-dropdown-arrow">▾</div>
        </div>
        {menuOpen && (
          <div className="emp-dropdown-menu">
            <Link to="/informes" className="emp-dropdown-item">
              Informes
            </Link>
            <hr className="emp-dropdown-line" />
            {/* Solo mostramos "Gestion de empleados" si el rol es admin */}
            {role === "admin" && (
              <Link to="/gestion-empleados" className="emp-dropdown-item">
                Gestion de empleados
              </Link>
            )}
            <Link to="/gestion-clientes" className="emp-dropdown-item">
              Gestion de cliente
            </Link>
            <Link to="/gestion-vehiculos" className="emp-dropdown-item">
              Gestion de vehiculos
            </Link>
            <hr className="emp-dropdown-line" />
            <span
              className="emp-dropdown-item"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Cerrar sesion
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
