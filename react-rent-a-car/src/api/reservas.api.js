import axios from "axios";

const reservasApi = axios.create({
  baseURL: "http://localhost:8000/rents/api/reservas/",
});

export const getAllReservas = () => reservasApi.get("/");

export const getReserva = (id) => reservasApi.get(`/${id}/`);

export const createReserva = (reserva) => reservasApi.post("/", reserva);

export const updateReserva = (id, reserva) =>
  reservasApi.put(`/${id}/`, reserva);

export const deleteReserva = (id) => reservasApi.delete(`/${id}/`);
