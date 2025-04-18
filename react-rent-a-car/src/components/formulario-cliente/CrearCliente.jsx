import React from "react";
import { useNavigate } from "react-router-dom";
import { FormularioCliente } from "../../components/formulario-cliente/FormularioCliente";
import { registerUser } from "../../api/users.api";

export function CrearCliente() {
  const navigate = useNavigate();

  const handleCrearCliente = async (data) => {
    const { confirmPassword, ...clienteData } = data;

    const finalData = {
      ...clienteData,
      role: 2, // Cliente
    };

    await registerUser(finalData);
    navigate("/gestion-clientes");
  };

  return (
    <div className="crear-cliente-page">
      <h1>Crear Cliente</h1>
      <FormularioCliente mode="create" onSubmit={handleCrearCliente} />
    </div>
  );
}
