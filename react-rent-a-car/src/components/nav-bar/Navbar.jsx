import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate("/home");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-div-logo">
        <Link to="/home">
          <img
            src="/Logo empresa.png"
            alt="Logo de la empresa"
            className="navbar-logo"
          />
        </Link>
      </div>

      <div className="navbar-right">
        {!user && (
          <>
            <Link to="/catalogo" className="navbar-right-item">
              Catálogo Carros
            </Link>
            {location.pathname !== "/mis-reservas" && (
              <Link to="/mis-reservas" className="navbar-right-item">
                Mis Reservas
              </Link>
            )}
            <div className="navbar-login">
              {location.pathname !== "/login" && (
                <Link to="/login" className="navbar-right-item">
                  Iniciar Sesión
                </Link>
              )}
              {location.pathname !== "/login" &&
                location.pathname !== "/register" && <span> | </span>}
              {location.pathname !== "/register" && (
                <Link to="/register" className="navbar-right-item">
                  Registrarse
                </Link>
              )}
            </div>
          </>
        )}
        {(user?.role === "cliente" ||
          user?.role === "admin" ||
          user?.role === "recepcionista") && (
          <>
            {user?.role === "admin" && (
              <>
                {location.pathname !== "/catalogo" && (
                  <Link to="/catalogo" className="navbar-right-item">
                    Catálogo Carros
                  </Link>
                )}
                {location.pathname !== "/mis-reservas" && (
                  <Link to="/mis-reservas" className="navbar-right-item">
                    Mis Reservas
                  </Link>
                )}
              </>
            )}
            <div className="navbar-menu">
              <div className="navbar-menu-initials" onClick={toggleMenu}>
                {user.username?.substring(0, 2).toUpperCase()}
              </div>
              <div className="navbar-dropdown-arrow" onClick={toggleMenu}>
                ▾
              </div>
            </div>
            {menuOpen && (
              <div className="navbar-dropdown-menu">
                {user?.role === "cliente" && (
                  <>
                    <Link to="/catalogo" className="navbar-dropdown-item">
                      Catálogo Carros
                    </Link>
                    <Link to="/mis-reservas" className="navbar-dropdown-item">
                      Mis Reservas
                    </Link>
                  </>
                )}
                {user?.role === "admin" && (
                  <>
                    <Link to="/clientes" className="navbar-dropdown-item">
                      Gestionar Clientes
                    </Link>
                    <Link to="/vehiculos" className="navbar-dropdown-item">
                      Gestionar Vehiculos
                    </Link>
                    <Link to="/empleados" className="navbar-dropdown-item">
                      Gestionar Empleados
                    </Link>
                  </>
                )}
                {user?.role === "recepcionista" && (
                  <>
                    <Link></Link>
                  </>
                )}
                {user?.role === "personal_entrega" && (
                  <>
                    <Link></Link>
                  </>
                )}
                {user?.role === "personal_recepcion" && (
                  <>
                    <Link></Link>
                  </>
                )}
                <hr className="navbar-dropdown-line" />
                <span
                  className="navbar-dropdown-item"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Cerrar sesión
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
