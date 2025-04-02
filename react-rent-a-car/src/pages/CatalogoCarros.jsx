import React from "react";
import "./CatalogoCarros.css";
import { VehicleCard } from "../components/VehicleCard";

export function CatalogoCarros() {

  const vehicles = [
    { id: 1, image: "/ruta/de/imagen1.jpg", name: "Carro A", type: "Sedan" },
    { id: 2, image: "/ruta/de/imagen2.jpg", name: "Carro B", type: "Sedan" },
    { id: 3, image: "/ruta/de/imagen3.jpg", name: "Carro C", type: "Sedan" },
    { id: 4, image: "/ruta/de/imagen4.jpg", name: "Carro D", type: "Sedan" },
    { id: 5, image: "/ruta/de/imagen5.jpg", name: "Carro E", type: "Sedan" },
    { id: 6, image: "/ruta/de/imagen6.jpg", name: "Carro F", type: "Sedan" },
  ];

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">Catálogo de Carros</h1>
      <div className="vehicles-container">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            image={vehicle.image}
            name={vehicle.name}
            type={vehicle.type}
          />
        ))}
      </div>
    </div>
  );
};