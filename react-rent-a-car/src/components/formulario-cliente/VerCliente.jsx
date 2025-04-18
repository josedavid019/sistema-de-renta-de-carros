import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "../../api/users.api";
import { FormularioCliente } from "../../components/formulario-cliente/FormularioCliente";
import { toast } from "react-hot-toast";

export function VerCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    async function fetchCliente() {
      try {
        const res = await getUser(id);
        const data = res.data;

        const mappedCliente = {
          user_username: data.user_username,
          user_firstname: data.user_firstname,
          user_secondname: data.user_secondname,
          user_lastname: data.user_lastname,
          user_second_lastname: data.user_second_lastname,
          user_dateofbirth: data.user_dateofbirth,
          user_cedula: data.user_cedula,
          user_email: data.user_email,
          user_phone: data.user_phone,
        };

        setCliente(mappedCliente);
      } catch (error) {
        toast.error("Error al cargar cliente");
        console.error(error);
      }
    }

    fetchCliente();
  }, [id]);

  return (
    <div>
      <h2 className="ver-titulo">Detalles del Cliente</h2>
      {cliente && <FormularioCliente mode="view" defaultValues={cliente} />}
      <button onClick={() => navigate(`/gestion-clientes`)}>Volver</button>
    </div>
  );
}
