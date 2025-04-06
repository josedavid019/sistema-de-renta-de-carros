import React from "react";
import "./VehicleCard.css";

export function VehicleCard({image, name, type}) {
    return (
        <div className="vehicle-card-catalog">
            <h2 className="vehicle-type-catalog">{type}</h2>
            <h3 className="vehicle-name-catalog">{name}</h3>
            <img className="vehicle-image-catalog" src={image} alt={name} /><br />
            <button className="vehicle-button-catalog">Abrir</button>
        </div>
    )
}