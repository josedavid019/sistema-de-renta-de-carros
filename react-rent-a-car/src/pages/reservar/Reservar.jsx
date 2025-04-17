import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./Reservar.css";

export function Reservar({ goToHome }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  // Extraemos los datos enviados desde Home (recogida y devolución)
  const { lugar, hora, fechaRecogida, fechaEntrega } = location.state || {};

  const [currentStage, setCurrentStage] = useState(2); // Empezamos en Stage 2
  const [offerSelected, setOfferSelected] = useState(false);
  const [totalProtection, setTotalProtection] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Estados para el popup de reserva creada
  const [showPopup, setShowPopup] = useState(false);
  const [codigoReserva, setCodigoReserva] = useState("");

  // Estados para el formulario del Stage 4 (datos personales)
  const [nombre, setNombre] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [correo, setCorreo] = useState("");
  const [codigoPais, setCodigoPais] = useState("+57");
  const [celular, setCelular] = useState("");
  const [documento, setDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [licencia, setLicencia] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [paisLicencia, setPaisLicencia] = useState("");
  const [metodoPago, setMetodoPago] = useState("");

  const stages = [
    { title: "Agencia, fecha y hora de reserva", completed: true },
    { title: "Categoría de vehículos", completed: currentStage > 2 },
    { title: "Cargos y adicionales", completed: currentStage > 3 },
    { title: "Datos de registro", completed: false },
  ];

  const vehicles = [
    {
      id: 1,
      imageSrc: "/ruta/de/vehiculo1.jpg",
      price: "$XXX",
      name: "Vehículo 1",
    },
    {
      id: 2,
      imageSrc: "/ruta/de/vehiculo2.jpg",
      price: "$XXX",
      name: "Vehículo 2",
    },
    {
      id: 3,
      imageSrc: "/ruta/de/vehiculo3.jpg",
      price: "$XXX",
      name: "Vehículo 3",
    },
    {
      id: 4,
      imageSrc: "/ruta/de/vehiculo4.jpg",
      price: "$XXX",
      name: "Vehículo 4",
    },
    {
      id: 5,
      imageSrc: "/ruta/de/vehiculo5.jpg",
      price: "$XXX",
      name: "Vehículo 5",
    },
    {
      id: 6,
      imageSrc: "/ruta/de/vehiculo6.jpg",
      price: "$XXX",
      name: "Vehículo 6",
    },
  ];

  const nextStage = () => setCurrentStage((prev) => prev + 1);
  const prevStage = () =>
    setCurrentStage((prev) => (prev > 1 ? prev - 1 : prev));

  // Stage 2: Selección de vehículo
  const handleElegir = (vehicle) => {
    console.log("Vehículo seleccionado:", vehicle);
    setSelectedVehicle(vehicle);
    setOfferSelected(true);
    nextStage(); // Pasa al Stage 3
  };

  const toggleTotalProtection = () => setTotalProtection((prev) => !prev);
  const handleSeguir = () => nextStage();

  // Stage 4: Validar que el formulario esté completo y mostrar el popup
  const handleFinalReservar = () => {
    if (
      !nombre ||
      !nacionalidad ||
      !correo ||
      !celular ||
      !documento ||
      !numeroDocumento ||
      !fechaNacimiento ||
      !direccion ||
      !licencia ||
      !vencimiento ||
      !paisLicencia ||
      !metodoPago
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    const code = "RC-" + Math.floor(1000 + Math.random() * 9000);
    setCodigoReserva(code);
    setShowPopup(true);
  };

  const handleInicio = () => {
    setShowPopup(false);
    goToHome();
  };

  const renderStageIndicator = () => (
    <div className="stage-indicator">
      {stages.map((stage, index) => (
        <div key={index} className="stage-item">
          <div
            className={`stage-circle ${stage.completed ? "completed" : ""} ${
              currentStage === index + 1 ? "active" : ""
            }`}
          >
            {stage.completed ? <span className="check">✓</span> : index + 1}
          </div>
          <div className="stage-title">{stage.title}</div>
          {index < stages.length - 1 && <div className="stage-line"></div>}
        </div>
      ))}
    </div>
  );

  const renderStageContent = () => {
    switch (currentStage) {
      case 2:
        return (
          <div className="stage-content">
            <h2>Categoría de vehículos</h2>
            <p>
              Selecciona el tipo de autos que mejor se adapte a sus necesidades.
            </p>
            <div className="vehicles-grid">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="vehicle-card">
                  <img
                    src={vehicle.imageSrc}
                    alt={vehicle.name}
                    className="vehicle-image"
                  />
                  <div className="vehicle-price">{vehicle.price}</div>
                  <button
                    className="vehicle-button"
                    onClick={() => handleElegir(vehicle)}
                  >
                    Elegir
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="stage-content stage3-protections">
            <div className="protections-box">
              <h2>Protecciones</h2>
              <div className="protection-option">
                <label>
                  <input type="checkbox" checked readOnly />
                  Protección Obligatoria (Incluida) - COP xxxxx
                </label>
              </div>
              <div className="protection-option">
                <label>
                  <input
                    type="checkbox"
                    checked={totalProtection}
                    onChange={toggleTotalProtection}
                  />
                  Protección Total (Opcional) - COP xxxxx
                </label>
              </div>
            </div>
            <div className="vehicle-summary">
              <h3>Vehículo Seleccionado</h3>
              {selectedVehicle && (
                <>
                  <p>{selectedVehicle.name}</p>
                  <img
                    src={selectedVehicle.imageSrc}
                    alt={selectedVehicle.name}
                    className="vehicle-selected-image"
                  />
                  <p>Precio: {selectedVehicle.price}</p>
                </>
              )}
            </div>
            <button className="seguir-btn" onClick={handleSeguir}>
              Seguir
            </button>
            <button className="btn-back" onClick={prevStage}>
              Volver a Categoría
            </button>
          </div>
        );
      case 4:
        return (
          <div className="stage-content registro-stage">
            <div className="registro-resumen-wrapper">
              {/* Formulario de datos personales (a la izquierda) */}
              <div className="registro-form">
                <h2>Datos personales</h2>
                <p className="registro-info">
                  Informa tus datos para que podamos realizar tu reserva.
                  <br />
                  Los campos marcados con un asterisco (*) son obligatorios.
                </p>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre completo *</label>
                    <input
                      type="text"
                      className="registro-input"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nacionalidad *</label>
                    <input
                      type="text"
                      className="registro-input"
                      value={nacionalidad}
                      onChange={(e) => setNacionalidad(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Correo electrónico *</label>
                    <input
                      type="email"
                      className="registro-input"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Celular * (con código de país)</label>
                    <div className="input-flex">
                      <input
                        type="text"
                        placeholder="+57"
                        className="registro-input code"
                        value={codigoPais}
                        onChange={(e) => setCodigoPais(e.target.value)}
                      />
                      <input
                        type="number"
                        className="registro-input"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Documento *</label>
                    <select
                      className="registro-input"
                      value={documento}
                      onChange={(e) => setDocumento(e.target.value)}
                    >
                      <option value="">Selecciona</option>
                      <option value="cedula">Cédula</option>
                      <option value="pasaporte">Pasaporte</option>
                      <option value="dni">DNI</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Número *</label>
                    <input
                      type="number"
                      className="registro-input"
                      value={numeroDocumento}
                      onChange={(e) => setNumeroDocumento(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Fecha de nacimiento *</label>
                    <input
                      type="date"
                      className="registro-input"
                      value={fechaNacimiento}
                      onChange={(e) => setFechaNacimiento(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Dirección de residencia *</label>
                    <input
                      type="text"
                      className="registro-input"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Número de licencia de conducir *</label>
                    <input
                      type="number"
                      className="registro-input"
                      value={licencia}
                      onChange={(e) => setLicencia(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Fecha de vencimiento de la licencia *</label>
                    <input
                      type="date"
                      className="registro-input"
                      value={vencimiento}
                      onChange={(e) => setVencimiento(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>País de emisión de la licencia *</label>
                    <input
                      type="text"
                      className="registro-input"
                      value={paisLicencia}
                      onChange={(e) => setPaisLicencia(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Método de pago *</label>
                    <select
                      className="registro-input"
                      value={metodoPago}
                      onChange={(e) => setMetodoPago(e.target.value)}
                    >
                      <option value="">Selecciona</option>
                      <option value="tarjeta">Tarjeta</option>
                      <option value="presencial">Presencial</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Ticket resumen a la derecha */}
              <div className="resumen-ticket">
                <div className="resumen-header">Resumen de la reserva</div>
                <div className="resumen-body">
                  <p>
                    <strong>Recogida:</strong>{" "}
                    {fechaRecogida || "No seleccionada"}
                  </p>
                  <hr />
                  <p>
                    <strong>Devolución:</strong>{" "}
                    {fechaEntrega || "No seleccionada"}
                  </p>
                  <hr />
                  <p>
                    <strong>Modelo:</strong>{" "}
                    {selectedVehicle ? selectedVehicle.name : "No seleccionado"}
                  </p>
                  <hr />
                  <p>
                    <strong>Oferta:</strong>{" "}
                    {totalProtection
                      ? "Protección Total"
                      : "Protección Obligatoria"}
                  </p>
                </div>
                <div className="resumen-footer">
                  Total: {selectedVehicle ? selectedVehicle.price : "$0"}
                </div>
              </div>
            </div>
            <button
              className="reservar-btn"
              onClick={handleFinalReservar}
              disabled={
                !(
                  nombre &&
                  nacionalidad &&
                  correo &&
                  celular &&
                  documento &&
                  numeroDocumento &&
                  fechaNacimiento &&
                  direccion &&
                  licencia &&
                  vencimiento &&
                  paisLicencia &&
                  metodoPago
                )
              }
            >
              Reservar
            </button>
            <button className="btn-back" onClick={prevStage}>
              Volver a Protecciones
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="reservar-container">
      {renderStageIndicator()}
      {renderStageContent()}

      {/* Popup verde para reserva creada */}
      {showPopup && (
        <div className="reserva-popup-overlay">
          <div className="reserva-popup-content">
            <h2>Reserva Creada</h2>
            <div className="reserva-icon">✓</div>
            <p>
              El código es: <strong>{codigoReserva}</strong>
              <br />y fue enviado a su correo
            </p>
            <button className="popup-inicio-btn" onClick={handleInicio}>
              Inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
