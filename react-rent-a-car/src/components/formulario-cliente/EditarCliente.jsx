import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, updateUser, deleteUser } from "../../api/users.api";
import { FormularioCliente } from "../../components/formulario-cliente/FormularioCliente";
import { toast } from "react-hot-toast";

export function EditarCliente() {
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

  const handleUpdate = async (data) => {
    const { confirmPassword, ...clienteData } = data;

    try {
      await updateUser(id, {
        ...clienteData,
        role: 2,
      });
      toast.success("Cliente actualizado correctamente");
      navigate("/gestion-clientes");
    } catch (error) {
      console.error(
        "Detalles del error:",
        error.response?.data || error.message
      );
      toast.error("Error al actualizar cliente");
    }
  };

  const handleDelete = async () => {
    const confirmado = window.confirm(
      "¿Estás seguro/a de que deseas eliminar este cliente?"
    );
    if (!confirmado) return;

    try {
      await deleteUser(id);
      toast.success("Cliente eliminado correctamente");
      navigate("/gestion-clientes");
    } catch (error) {
      console.error("Error al eliminar cliente", error);
      toast.error("Error al eliminar cliente");
    }
  };

  return (
    <div>
      <h2 className="editar-titulo">Editar Cliente</h2>
      {cliente && (
        <>
          <FormularioCliente
            mode="edit"
            defaultValues={cliente}
            onSubmit={handleUpdate}
          />
          <button className="btn-eliminar" onClick={handleDelete}>
            Eliminar Cliente
          </button>
        </>
      )}
    </div>
  );
}
