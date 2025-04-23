import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryCard } from "../../components/cards/CategoryCard";
import { VehicleCard } from "../../components/cards/VehicleCard";
import { getAllCategories, getAllVehicles } from "../../api/vehicles.api";
import { useReserva } from "../../context/ReservaContext";

export function ChoiceVehicle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setReserva } = useReserva();
  const { stage1 } = location.state || {};

  const [categorias, setCategorias] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener todas las categorías y vehículos
        const [categoriesResponse, vehiclesResponse] = await Promise.all([
          getAllCategories(),
          getAllVehicles(),
        ]);

        // Filtrar solo vehículos disponibles (status_id = 1)
        const vehiculosDisponibles = vehiclesResponse.data.filter(
          (v) => v.status?.status_id === 1
        );

        // Establecer los vehículos disponibles
        setVehiculos(vehiculosDisponibles);

        // Filtrar categorías que tienen vehículos disponibles
        const categoriasConVehiculosDisponibles =
          categoriesResponse.data.filter((cat) =>
            vehiculosDisponibles.some(
              (veh) => veh.category?.category_id === cat.category_id
            )
          );

        // Establecer las categorías con vehículos disponibles
        setCategorias(categoriasConVehiculosDisponibles);
      } catch (err) {
        console.error("Error cargando datos:", err);
      }
    };

    fetchData();
  }, []);

  const handleVehicleSelect = (vehicle) => {
    // En lugar de solo navegar, también establecemos los datos del vehículo
    setReserva((prevReserva) => ({
      ...prevReserva,
      selectedVehicle: vehicle, // Guardamos el vehículo seleccionado
    }));

    // Ahora, navegamos a la siguiente página
    navigate("/reservar/datos", {
      state: { ...stage1, selectedVehicle: vehicle }, // Pasamos también el vehículo en el estado
    });
  };

  return (
    <div className="choice-vehicle-container">
      {!categoriaSeleccionada ? (
        <>
          <h2>Selecciona una categoría</h2>
          {categorias.length === 0 ? (
            <p>No hay categorías disponibles con vehículos disponibles.</p>
          ) : (
            categorias.map((cat) => (
              <CategoryCard
                key={cat.category_id}
                category_image={cat.category_image || "/img/default.jpg"}
                category_name={cat.category_name}
                category_description={cat.category_description}
                onClick={() => setCategoriaSeleccionada(cat.category_id)}
              />
            ))
          )}
        </>
      ) : (
        <>
          <button onClick={() => setCategoriaSeleccionada(null)}>
            ← Volver a categorías
          </button>
          <h2>Vehículos disponibles</h2>
          {vehiculos
            .filter((v) => v.category?.category_id === categoriaSeleccionada)
            .map((v) => (
              <VehicleCard
                key={v.vehicle_id}
                vehicle={v}
                onSelect={() => handleVehicleSelect(v)}
              />
            ))}
        </>
      )}
    </div>
  );
}
