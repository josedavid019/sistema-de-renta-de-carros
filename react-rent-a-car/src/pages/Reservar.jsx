import React from "react";
import "./Reservar.css";

const Reservar = ({ goToHome }) => {
  // Indicador de etapas: el primer stage está completado, el segundo es activo.
  const stages = [
    { title: "Agencia, fecha y hora de reserva", completed: true },
    { title: "Categoría de vehículos", active: true },
    { title: "Cargos y adicionales", completed: false },
    { title: "Datos de registro", completed: false },
  ];

  // Datos de ejemplo para los vehículos (6 vehículos)
  const vehicles = [
    { id: 1, imageSrc: "/ruta/de/vehiculo1.jpg", price: "$50" },
    { id: 2, imageSrc: "/ruta/de/vehiculo2.jpg", price: "$60" },
    { id: 3, imageSrc: "/ruta/de/vehiculo3.jpg", price: "$55" },
    { id: 4, imageSrc: "/ruta/de/vehiculo4.jpg", price: "$70" },
    { id: 5, imageSrc: "/ruta/de/vehiculo5.jpg", price: "$65" },
    { id: 6, imageSrc: "/ruta/de/vehiculo6.jpg", price: "$80" },
  ];

  return (
    <div className="reservar-container">
      {/* Indicador de etapas */}
      <div className="stage-indicator">
        {stages.map((stage, index) => (
          <div key={index} className="stage-item">
            <div
              className={`stage-circle ${stage.completed ? "completed" : ""} ${
                stage.active ? "active" : ""
              }`}
            >
              {stage.completed ? (
                <span className="check">&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="stage-title">{stage.title}</div>
            {index < stages.length - 1 && <div className="stage-line"></div>}
          </div>
        ))}
      </div>

      {/* Contenido de la Etapa 2: Categoría de vehículos */}
      <div className="stage-content">
        <h2>Categoría de vehículos</h2>
        <p>Selecciona el tipo de autos que mejor se adapte a sus necesidades.</p>
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <img
                src={vehicle.imageSrc}
                alt={`Vehículo ${vehicle.id}`}
                className="vehicle-image"
              />
              <div className="vehicle-price">{vehicle.price}</div>
              <button className="vehicle-button">Elegir</button>
            </div>
          ))}
        </div>
      </div>

      {/* Opcional: Botón para regresar al Home (o continuar al siguiente stage) */}
      <button className="btn-back" onClick={goToHome}>
        Volver al Home
      </button>
    </div>
  );
};

export default Reservar;
