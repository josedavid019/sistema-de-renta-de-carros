import React from "react";
import { useReserva } from "../../context/ReservaContext";
import { useNavigate } from "react-router-dom";
import { createReserva } from "../../api/reservations.api";
import { createPayment, createInvoice } from "../../api/payments.api";
import "./Payment.css";

export function Payment() {
  const { reserva, setReserva } = useReserva();
  const navigate = useNavigate();

  const calcularHoras = (pickupDate, dropoffDate) => {
    const fechaRecogida = new Date(pickupDate);
    const fechaDevolucion = new Date(dropoffDate);
    const diferencia = fechaDevolucion - fechaRecogida;

    if (isNaN(diferencia)) {
      console.error(
        "Error al calcular las fechas, la diferencia no es un número válido."
      );
      return 0;
    }

    const horas = diferencia / (1000 * 60 * 60);
    return horas;
  };

  const horasAlquilar = calcularHoras(
    `${reserva.pickup_date} ${reserva.pickup_time}`,
    `${reserva.dropoff_date} ${reserva.dropoff_time}`
  );
  const totalReserva = horasAlquilar * reserva.vehicle?.vehicle_hour_rate;

  const handleSimularPago = async () => {
    const confirmado = window.confirm(
      "¿Deseas confirmar y proceder con el pago?"
    );
    if (!confirmado) return;

    try {
      const reservaLimpia = {
        pickup_location: reserva.pickup_location,
        dropoff_location: reserva.dropoff_location,
        pickup_date: reserva.pickup_date,
        dropoff_date: reserva.dropoff_date,
        pickup_time: reserva.pickup_time,
        dropoff_time: reserva.dropoff_time,

        reservation_firstname: reserva.reservation_firstname,
        reservation_secondname: reserva.reservation_secondname || "",
        reservation_lastname: reserva.reservation_lastname,
        reservation_second_lastname: reserva.reservation_second_lastname || "",
        reservation_dateofbirth: reserva.reservation_dateofbirth,
        reservation_cedula: reserva.reservation_cedula,
        reservation_email: reserva.reservation_email,
        reservation_phone: reserva.reservation_phone,
        reservation_genre: reserva.reservation_genre,
        reservation_address: reserva.reservation_address,

        license_number: reserva.license_number,
        license_expiry_date: reserva.license_expiry_date,
        license_country: reserva.license_country,

        reservation_status: "pendiente",
        user: reserva.user_id || null,
        vehicle: reserva.vehicle?.vehicle_id,
      };

      const responseReserva = await createReserva(reservaLimpia);
      const reservaCreada = responseReserva.data;

      reservaCreada.vehicle = reserva.vehicle;
      setReserva(reservaCreada);

      const paymentData = {
        payment_method: "efectivo",
        payment_status: "completado",
        payment_amount: totalReserva,
        reservation: reservaCreada.reservation_id,
      };

      await createPayment(paymentData);

      // 🔢 Generar número de factura único (ejemplo: INV-20250422153000)
      const timestamp = new Date()
        .toISOString()
        .replace(/[-:.TZ]/g, "")
        .slice(0, 14);
      const invoiceNumber = `INV-${timestamp}`;

      const invoiceData = {
        invoice_number: invoiceNumber,
        invoice_total: totalReserva,
        invoice_status: "pagada", // asumiendo que el pago fue exitoso
        invoice_notes: "Factura generada automáticamente.",
        reservation: reservaCreada.reservation_id,
        vehicle: reserva.vehicle?.vehicle_id,
      };

      await createInvoice(invoiceData);

      navigate("/reservar/factura");
    } catch (error) {
      console.error(
        "Error al procesar la reserva/pago/factura:",
        error.response || error
      );
      console.log("Detalles del error:", error.response?.data);
      alert("Ocurrió un error. Verifica los datos e inténtalo nuevamente.");
    }
  };

  if (!reserva) {
    return <div>No hay datos de reserva disponibles.</div>;
  }

  return (
    <div className="payment-container">
      <h2 className="payment-title">Resumen de la Reserva</h2>

      <div className="payment-details">
        <div className="payment-section">
          <h3 className="payment-subtitle">Datos:</h3>
          <p className="payment-text">
            Nombre: {reserva.reservation_firstname}{" "}
            {reserva.reservation_lastname}
          </p>
          <p className="payment-text">Cédula: {reserva.reservation_cedula}</p>
          <p className="payment-text">Email: {reserva.reservation_email}</p>
          <p className="payment-text">Teléfono: {reserva.reservation_phone}</p>
          <p className="payment-text">
            Dirección: {reserva.reservation_address}
          </p>
          <p className="payment-text">
            Número de Licencia: {reserva.license_number}
          </p>
          <p className="payment-text">
            País de Emisión: {reserva.license_country}
          </p>
        </div>

        <div className="payment-section">
          <h3 className="payment-subtitle">Datos del Vehículo:</h3>
          <p className="payment-text">
            Nombre: {reserva.vehicle?.vehicle_brand}{" "}
            {reserva.vehicle?.vehicle_model}
          </p>
          <p className="payment-text">
            Placa: {reserva.vehicle?.vehicle_license_plate}
          </p>
          <p className="payment-text">Año: {reserva.vehicle?.vehicle_year}</p>
          <p className="payment-text">
            Color: {reserva.vehicle?.vehicle_color}
          </p>
        </div>

        <div className="payment-section">
          <h3 className="payment-subtitle">Datos de la Reserva:</h3>
          <p className="payment-text">
            Lugar de recogida: {reserva.pickup_location}
          </p>
          <p className="payment-text">
            Fecha de recogida: {reserva.pickup_date}
          </p>
          <p className="payment-text">
            Hora de recogida: {reserva.pickup_time}
          </p>
          <p className="payment-text">
            Lugar de devolución: {reserva.dropoff_location}
          </p>
          <p className="payment-text">
            Fecha de devolución: {reserva.dropoff_date}
          </p>
          <p className="payment-text">
            Hora de devolución: {reserva.dropoff_time}
          </p>
        </div>

        <div className="payment-section">
          <h3 className="payment-subtitle">Pago</h3>
          <p className="payment-text">
            Alquiler por Hora: {reserva.vehicle?.vehicle_hour_rate}
          </p>
          <p className="payment-text">
            Total Horas a Alquilar: {horasAlquilar.toFixed(2)}
          </p>
          <p className="payment-text">
            Total de la Reserva: {totalReserva.toFixed(2)}
          </p>
        </div>
      </div>

      <button className="payment-button" onClick={handleSimularPago}>
        Confirmar y Pagar
      </button>
    </div>
  );
}
