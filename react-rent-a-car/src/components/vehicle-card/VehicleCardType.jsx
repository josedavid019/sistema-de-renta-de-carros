import React from "react";
import "./VehicleCardType.css";

export function VehicleCardType({ name, image }) {
  return (
    <div className="vehicle-type-card">
      <h2 className="vehicle-type-name">{name}</h2>
      <img className="vehicle-type-image" src={image} alt={name} />
    </div>
  );
}
