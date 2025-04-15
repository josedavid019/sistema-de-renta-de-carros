import React, { useState } from "react";
import "./GestionVehiculos.css";

const vehiculosMock = [
  "Vehiculo A",
  "Vehiculo B",
  "Vehiculo C",
  "Vehiculo D",
  "Vehiculo E",
  "Vehiculo F"
];

export function GestionVehiculos() {
  const [busqueda, setBusqueda] = useState("");
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
  // Nuevo estado para distinguir "modo agregar" de "modo editar"
  const [agregandoVehiculo, setAgregandoVehiculo] = useState(false);

  /**
   * Funcion que se encarga de seleccionar un vehiculo existente (modo editar).
   */
  const handleSeleccion = (nombre) => {
    setAgregandoVehiculo(false); // aseguramos que NO este en modo agregar
    // Simulacion de datos completos; en un caso real buscarias el objeto completo
    setVehiculoSeleccionado({
      id: "AUTOGENERADO-001",
      marca: "Toyota",
      modelo: "Corolla",
      ano: "2021",
      tipo: "Sedan",
      puertas: "4",
      capacidad: "5",
      color: "Negro",
      incorporacion: "2022-01-10",
      combustible: "Gasolina",
      transmision: "Automatica",
      kilometraje: "25000 km",
      potencia: "132 HP",
      consumo: "16 km/L",
      maletero: "470 L",
      alquilerDia: "$50",
      deposito: "$200",
      estado: "Disponible",
      ubicacion: "Sucursal Norte",
      ultimaRenta: "2024-12-20",
      placa: "XYZ-123",
      chasis: "1HGCM82633A123456",
      seguro: "Si",
      vencimientoSeguro: "2025-05-01",
      docEstado: "Completa",
      historialMantenimiento: "Cambio de aceite - 2024/03/10",
      ultimaInspeccion: "2024/10/01",
      mantenimientoProx: "2025/04/01",
      historialAccidentes: "Sin incidentes",
      valorActual: "$17,000",
      descripcion: "Vehiculo en excelente estado, con todas las revisiones al dia."
    });
  };

  /**
   * Funcion que habilita el modo "agregar vehiculo" y abre el modal.
   * Puedes optar por setear algunos campos por defecto o dejarlos vacíos.
   */
  const handleAgregarVehiculo = () => {
    setAgregandoVehiculo(true);
    // Creamos un objeto vacio o con valores por defecto
    setVehiculoSeleccionado({
      id: "AUTOGENERADO-xxx", // podria usarse un ID autogenerado
      marca: "",
      modelo: "",
      ano: "",
      tipo: "",
      puertas: "",
      capacidad: "",
      color: "",
      incorporacion: "",
      combustible: "",
      transmision: "",
      kilometraje: "",
      potencia: "",
      consumo: "",
      maletero: "",
      alquilerDia: "",
      deposito: "",
      estado: "",
      ubicacion: "",
      ultimaRenta: "",
      placa: "",
      chasis: "",
      seguro: "",
      vencimientoSeguro: "",
      docEstado: "",
      historialMantenimiento: "",
      ultimaInspeccion: "",
      mantenimientoProx: "",
      historialAccidentes: "",
      valorActual: "",
      descripcion: ""
    });
  };

  /**
   * Cierra el modal y regresa al estado inicial
   */
  const handleCerrarModal = () => {
    setVehiculoSeleccionado(null);
    setAgregandoVehiculo(false);
  };

  return (
    <div className="gestion-vehiculos-container">
      <h1>Gestion de Vehiculos</h1>

      {/* Barra de busqueda */}
      <div className="barra-busqueda">
        <span className="search-prefix">▼</span>

        {/* Contenedor del input y el dropdown */}
        <div className="dropdown-container">
          <input
            type="text"
            placeholder="Ingrese el nombre del carro"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {/* Desplegable de resultados */}
          {busqueda.trim() !== "" && (
            <div className="dropdown-list">
              {vehiculosMock
                .filter((v) => v.toLowerCase().includes(busqueda.toLowerCase()))
                .map((v, idx) => (
                  <div
                    key={idx}
                    className="dropdown-item"
                    onClick={() => handleSeleccion(v)}
                  >
                    {v}
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Boton de Agregar Vehiculo */}
        <button className="btn-agregar-vehiculo" onClick={handleAgregarVehiculo}>
          Agregar Vehiculo
        </button>
      </div>

      {/* Modal emergente con informacion del vehiculo */}
      {vehiculoSeleccionado && (
        <div className="modal-vehiculo">
          <div className="modal-contenido">
            <h2>Informacion del Vehiculo</h2>

            {/* Seccion 1: Datos basicos del vehiculo */}
            <h3>1. Datos Basicos</h3>
            <div className="campo-grid">
              <div>
                <label>ID del vehiculo</label>
                {/* readOnly para ID, si gustas se puede editar */}
                <input type="text" defaultValue={vehiculoSeleccionado.id} readOnly />
              </div>
              <div>
                <label>Marca</label>
                <input type="text" defaultValue={vehiculoSeleccionado.marca} />
              </div>
              <div>
                <label>Modelo</label>
                <input type="text" defaultValue={vehiculoSeleccionado.modelo} />
              </div>
              <div>
                <label>Ano</label>
                <input type="text" defaultValue={vehiculoSeleccionado.ano} />
              </div>
              <div>
                <label>Tipo de vehiculo</label>
                <input type="text" defaultValue={vehiculoSeleccionado.tipo} />
              </div>
              <div>
                <label>Numero de puertas</label>
                <input type="text" defaultValue={vehiculoSeleccionado.puertas} />
              </div>
              <div>
                <label>Capacidad de pasajeros</label>
                <input type="text" defaultValue={vehiculoSeleccionado.capacidad} />
              </div>
              <div>
                <label>Color</label>
                <input type="text" defaultValue={vehiculoSeleccionado.color} />
              </div>
              <div>
                <label>Fecha de incorporacion</label>
                <input type="text" defaultValue={vehiculoSeleccionado.incorporacion} />
              </div>
            </div>

            {/* Seccion 2: Especificaciones tecnicas */}
            <h3>2. Especificaciones Tecnicas</h3>
            <div className="campo-grid">
              <div>
                <label>Tipo de combustible</label>
                <input type="text" defaultValue={vehiculoSeleccionado.combustible} />
              </div>
              <div>
                <label>Transmision</label>
                <input type="text" defaultValue={vehiculoSeleccionado.transmision} />
              </div>
              <div>
                <label>Kilometraje actual</label>
                <input type="text" defaultValue={vehiculoSeleccionado.kilometraje} />
              </div>
              <div>
                <label>Potencia del motor</label>
                <input type="text" defaultValue={vehiculoSeleccionado.potencia} />
              </div>
              <div>
                <label>Consumo de combustible</label>
                <input type="text" defaultValue={vehiculoSeleccionado.consumo} />
              </div>
              <div>
                <label>Capacidad del maletero</label>
                <input type="text" defaultValue={vehiculoSeleccionado.maletero} />
              </div>
            </div>

            {/* Seccion 3: Informacion de renta */}
            <h3>3. Informacion de Renta</h3>
            <div className="campo-grid">
              <div>
                <label>Precio de alquiler por dia</label>
                <input type="text" defaultValue={vehiculoSeleccionado.alquilerDia} />
              </div>
              <div>
                <label>Deposito de seguridad</label>
                <input type="text" defaultValue={vehiculoSeleccionado.deposito} />
              </div>
              <div>
                <label>Estado del vehiculo</label>
                <input type="text" defaultValue={vehiculoSeleccionado.estado} />
              </div>
              <div>
                <label>Ubicacion</label>
                <input type="text" defaultValue={vehiculoSeleccionado.ubicacion} />
              </div>
              <div>
                <label>Fecha de ultima renta</label>
                <input type="text" defaultValue={vehiculoSeleccionado.ultimaRenta} />
              </div>
            </div>

            {/* Seccion 4: Documentacion y mantenimiento */}
            <h3>4. Documentacion y Mantenimiento</h3>
            <div className="campo-grid">
              <div>
                <label>Numero de placa</label>
                <input type="text" defaultValue={vehiculoSeleccionado.placa} />
              </div>
              <div>
                <label>Numero de chasis (VIN)</label>
                <input type="text" defaultValue={vehiculoSeleccionado.chasis} />
              </div>
              <div>
                <label>Seguro vigente</label>
                <input type="text" defaultValue={vehiculoSeleccionado.seguro} />
              </div>
              <div>
                <label>Fecha de vencimiento del seguro</label>
                <input type="text" defaultValue={vehiculoSeleccionado.vencimientoSeguro} />
              </div>
              <div>
                <label>Estado de la documentacion</label>
                <input type="text" defaultValue={vehiculoSeleccionado.docEstado} />
              </div>
              <div>
                <label>Historial de mantenimientos</label>
                <input type="text" defaultValue={vehiculoSeleccionado.historialMantenimiento} />
              </div>
              <div>
                <label>Ultima inspeccion tecnica</label>
                <input type="text" defaultValue={vehiculoSeleccionado.ultimaInspeccion} />
              </div>
              <div>
                <label>Proximo mantenimiento programado</label>
                <input type="text" defaultValue={vehiculoSeleccionado.mantenimientoProx} />
              </div>
            </div>

            {/* Seccion 5: Historial y valoracion */}
            <h3>5. Historial y Valoracion del Vehiculo</h3>
            <div className="campo-grid">
              <div>
                <label>Historial de accidentes/danos</label>
                <input type="text" defaultValue={vehiculoSeleccionado.historialAccidentes} />
              </div>
              <div>
                <label>Valor actual o depreciacion</label>
                <input type="text" defaultValue={vehiculoSeleccionado.valorActual} />
              </div>
            </div>

            {/* Seccion 6: Imagenes y detalles adicionales */}
            <h3>6. Imagenes y Detalles Adicionales</h3>
            <div className="campo-grid">
              <div>
                <label>Descripcion adicional</label>
                <input type="text" defaultValue={vehiculoSeleccionado.descripcion} />
              </div>
              <div>
                <label>Fotos del vehiculo</label>
                <input type="file" multiple accept="image/*" />
              </div>
            </div>

            {/* Botones del modal */}
            <div className="botones-modal">
              {/* Solo mostramos "Eliminar Vehiculo" si NO estamos en modo agregar */}
              {!agregandoVehiculo && (
                <button className="btn-eliminar">Eliminar Vehiculo</button>
              )}

              {/* 
                - Si estamos agregando, decimos "Agregar Vehiculo"
                - Si estamos editando, decimos "Agregar Cambios" 
              */}
              <button className="btn-agregar">
                {agregandoVehiculo ? "Agregar Vehiculo" : "Agregar Cambios"}
              </button>

              {/* 
                - Si estamos agregando, decimos "Cancelar"
                - Si estamos editando, decimos "Cerrar" 
              */}
              <button className="btn-cerrar" onClick={handleCerrarModal}>
                {agregandoVehiculo ? "Cancelar" : "Cerrar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
