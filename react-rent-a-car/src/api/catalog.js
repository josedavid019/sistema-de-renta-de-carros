import axios from "axios";


const catalogApi = axios.create({
  baseURL: "http://localhost:8000/catalog/",
});

// VEHICULOS
export const getAllVehicles = () => catalogApi.get("vehicles/");
export const getVehicle = (id) => catalogApi.get(`vehicles/${id}/`);
export const createVehicle = (vehicle) => catalogApi.post("vehicles/", vehicle);
export const updateVehicle = (id, vehicle) => catalogApi.put(`vehicles/${id}/`, vehicle);
export const deleteVehicle = (id) => catalogApi.delete(`vehicles/${id}/`);

// CATEGORIAS
export const getAllCategories = () => catalogApi.get("categories/");
export const getCategory = (id) => catalogApi.get(`categories/${id}/`);
export const createCategory = (category) => catalogApi.post("categories/", category);
export const updateCategory = (id, category) => catalogApi.put(`categories/${id}/`, category);
export const deleteCategory = (id) => catalogApi.delete(`categories/${id}/`);

// ESTADOS
export const getAllStatuses = () => catalogApi.get("statuses/");
export const getStatus = (id) => catalogApi.get(`statuses/${id}/`);
export const createStatus = (status) => catalogApi.post("statuses/", status);
export const updateStatus = (id, status) => catalogApi.put(`statuses/${id}/`, status);
export const deleteStatus = (id) => catalogApi.delete(`statuses/${id}/`);