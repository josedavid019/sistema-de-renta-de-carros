import React from "react";
import "./CarrosPorCategoria.css";
import { useParams } from "react-router-dom";
import { VehicleCardType } from "../../components/vehicle-card/VehicleCardType";

export function CarrosPorCategoria() {
  const { categoria } = useParams();

  const vehicles = [{ id: 1, image: "/ruta/de/imagen1.jpg", name: "Carro A" }];

  return (
    <div className="carros-type-container">
      <h1 className="carros-type-title">{categoria}</h1>
      {vehicles.map((vehicle) => (
        <VehicleCardType
          key={vehicle.id}
          image={vehicle.image}
          name={vehicle.name}
        />
      ))}
    </div>
  );
}
