import React from "react";
import "./Admin.css";

export function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-dv-title">
        <h1 className="admin-title">Buenas Señor 'name'</h1>
      </div>
      <div className="admin-stats">
        <div className="admin-div-subtitle-stats">
          <h2 className="admin-subtitle-stats">Estadísticas</h2>
        </div>
        <div className="admin-div-stats">
          <div className="admin-subdiv-stats">
            <h3 className="admin-name-stat">Clientes</h3>
            <p className="admin-number-stat">120</p>
          </div>
          <div className="admin-subdiv-stats">
            <h3 className="admin-name-stat">Empleados</h3>
            <p className="admin-number-stat">15</p>
          </div>
          <div className="admin-subdiv-stats">
            <h3 className="admin-name-stat">Vehículos</h3>
            <p className="admin-number-stat">42</p>
          </div>
          <div className="admin-subdiv-stats">
            <h3 className="admin-name-stat">Reservas activas</h3>
            <p className="admin-number-stat">8</p>
          </div>
          <div className="admin-subdiv-stats">
            <h3 className="admin-name-stat">Soporte</h3>
            <p className="admin-number-stat">12</p>
          </div>
        </div>
      </div>
      {/* Sección de Últimas Actividades */}
      <div className="admin-activities">
        <div className="admin-div-subtitle-stats">
          <h2 className="admin-subtitle-stats">Últimas Actividades</h2>
        </div>
        <ul>
          <li>Cliente 'John Doe' registró una nueva reserva</li>
          <li>Empleado 'Carlos' actualizó el vehículo con ID #235</li>
          <li>Se añadió un nuevo vehículo (Toyota Camry) al catálogo</li>
          <li>Cliente 'Maria' terminó su alquiler de vehículo</li>
        </ul>
      </div>
      {/* Sección de Alertas / Recordatorios */}
      <div>
        <h3>Alertas / Recordatorios</h3>
        <ul>
          <li>Verificar documento de identidad para el cliente 'Laura'</li>
          <li>Reserva #1016 pendiente de confirmación</li>
          <li>Devolución retrasada para el vehículo con ID #459</li>
          <li>El pago del cliente 'Michael' falló, requiere atención</li>
        </ul>
      </div>
      <div>
        <div>
          <button>Gestionar Clientes</button>
        </div>
        <div>
          <button>Gestionar Empleados</button>
        </div>
        <div>
          <button>Gestionar Vehiculos</button>
        </div>
        <div>
          <button>Ver Informes</button>
        </div>
      </div>
    </div>
  );
}
