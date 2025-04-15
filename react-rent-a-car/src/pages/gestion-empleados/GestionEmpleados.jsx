// src/pages/GestionEmpleados.jsx

import React, { useState } from "react";
import "./GestionEmpleados.css";

export function GestionEmpleados() {
  const [empleados, setEmpleados] = useState([
    { cedula: "100", nombre: "Juan Perez", rol: "empleado" },
    { cedula: "200", nombre: "Maria Lopez", rol: "administrador" },
  ]);

  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("empleado");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAgregar = () => {
    if (!cedula.trim() || !nombre.trim()) return;
    const nuevoEmpleado = { cedula, nombre, rol };
    setEmpleados([...empleados, nuevoEmpleado]);
    setCedula("");
    setNombre("");
    setRol("empleado");
  };

  const handleEditar = (empleado, index) => {
    setEditingEmployee({ ...empleado, index });
    setIsModalOpen(true);
  };

  const handleGuardarEdicion = () => {
    if (!editingEmployee) return;

    const { index, cedula, nombre, rol } = editingEmployee;
    const empleadosCopy = [...empleados];
    empleadosCopy[index] = { cedula, nombre, rol };
    setEmpleados(empleadosCopy);

    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  const handleCerrarModal = () => {
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div className="gestion-empleados-container">
      <h1>Gestion de empleados</h1>

      {/* Contenido principal: formulario + lista */}
      <div className="gestion-empleados-content">
        {/* Seccion izquierda: formulario para agregar un nuevo empleado */}
        <div className="form-empleados">
          <label>Cedula:</label>
          <input
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />

          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label>Rol:</label>
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="empleado">Empleado</option>
            <option value="administrador">Administrador</option>
          </select>

          <button className="btn-enviar" onClick={handleAgregar}>
            Enviar
          </button>
        </div>

        {/* Seccion derecha: lista de empleados */}
        <div className="lista-empleados">
          <h3>Empleados</h3>
          {empleados.map((emp, i) => (
            <div key={i} className="empleado-item">
              <div>
                <strong>Cedula:</strong> {emp.cedula} <br />
                <strong>Nombre:</strong> {emp.nombre} <br />
                <strong>Rol:</strong> {emp.rol}
              </div>
              {/* Ícono de lápiz para editar */}
              <div
                className="icono-lapiz"
                onClick={() => handleEditar(emp, i)}
                title="Editar empleado"
              >
                ✏️
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para edición */}
      {isModalOpen && editingEmployee && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Editar Empleado</h2>
            <label>Cedula:</label>
            <input
              type="text"
              value={editingEmployee.cedula}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  cedula: e.target.value,
                })
              }
            />

            <label>Nombre:</label>
            <input
              type="text"
              value={editingEmployee.nombre}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  nombre: e.target.value,
                })
              }
            />

            <label>Rol:</label>
            <select
              value={editingEmployee.rol}
              onChange={(e) =>
                setEditingEmployee({ ...editingEmployee, rol: e.target.value })
              }
            >
              <option value="empleado">Empleado</option>
              <option value="administrador">Administrador</option>
            </select>

            <div className="modal-buttons">
              <button onClick={handleGuardarEdicion}>Guardar</button>
              <button onClick={handleCerrarModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
