import React from "react";
import "./VehicleCard.css";

export function VehicleCard({image, name, type}) {
    return (
        <div className="vehicle-card">
            <h2 className="vehicle-type">{type}</h2>
            <h3 className="vehicle-name">{name}</h3>
            <img className="vehicle-image" src={image} alt={name} />
            <button className="vehicle-button">Abrir</button>
        </div>
    )
}