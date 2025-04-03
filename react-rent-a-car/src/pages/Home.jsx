// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import CarCarousel from "../components/CarCarousel";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  // Datos de ejemplo para las tarjetas de carros.
  // 'stars' representa la calificación inicial.
  const cars = [
    { carId: 1, imageSrc: "/ruta/de/imagen1.jpg", stars: 5, carName: "Carro A" },
    { carId: 2, imageSrc: "/ruta/de/imagen2.jpg", stars: 4, carName: "Carro B" },
    { carId: 3, imageSrc: "/ruta/de/imagen3.jpg", stars: 5, carName: "Carro C" },
    { carId: 4, imageSrc: "/ruta/de/imagen4.jpg", stars: 4, carName: "Carro D" },
    { carId: 5, imageSrc: "/ruta/de/imagen5.jpg", stars: 5, carName: "Carro E" },
    { carId: 6, imageSrc: "/ruta/de/imagen6.jpg", stars: 4, carName: "Carro F" },
  ];

  // Función para cambiar a la página de reserva.
  const handleReservar = () => {
    navigate("/reservar");
  };

  return (
    <div className="home-container">
      {/* Sección hero con imagen de fondo y formulario de reserva */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="home-title">Bienvenido A Rent a Car</h1>
          <div className="reservation-form">
            <label htmlFor="lugar">Lugar de recogida</label>
            <select id="lugar">
              <option value="">Selecciona un lugar</option>
              <option value="oficina">Oficina Central</option>
            </select>

            <label htmlFor="hora">Horas</label>
            <select id="hora">
              <option value="">Selecciona la hora</option>
              <option value="8:00">8:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
            </select>

            <label htmlFor="fechaRecogida">Fecha de recogida</label>
            <input type="date" id="fechaRecogida" className="date-field" />

            <label htmlFor="fechaEntrega">Fecha de entrega</label>
            <input type="date" id="fechaEntrega" className="date-field" />

            <button className="btn-reservar" onClick={handleReservar}>
              Reservar
            </button>
          </div>
        </div>
      </section>

      {/* Sección de recomendación con carrusel de carros */}
      <section className="recommendation-section">
        <h2>Carros Destacados</h2>
        <CarCarousel cars={cars} interval={2000} />
      </section>
    </div>
  );
}
