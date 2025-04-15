// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { CustomerLayout } from "./layouts/customer-layout/CustomerLayout";
import { EmployeeLayout } from "./layouts/employee-layout/EmployeeLayout";

import { Home } from "./pages/home/Home";
import { CatalogoCarros } from "./pages/catalogo_carros/CatalogoCarros";
import { MisReservas } from "./pages/mis-reservas/MisReservas";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Ayuda } from "./pages/ayuda/Ayuda";
import { Reservar } from "./pages/reservar/Reservar";

import { EmployeeHome } from "./pages/employee-home/EmployeeHome";
import { Informes } from "./pages/informes/Informes";
import { HistorialReservas } from "./pages/historial-reservas/HistorialReservas";
import { GestionCliente } from "./pages/gestion-cliente/GestionCliente";
import { GestionVehiculos } from "./pages/gestion-vehiculos/GestionVehiculos";
import { GestionEmpleados } from "./pages/gestion-empleados/GestionEmpleados";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Rutas de clientes */}
        <Route
          path="/home"
          element={
            <CustomerLayout>
              <Home />
            </CustomerLayout>
          }
        />
        <Route
          path="/catalogo"
          element={
            <CustomerLayout>
              <CatalogoCarros />
            </CustomerLayout>
          }
        />
        <Route
          path="/mis-reservas"
          element={
            <CustomerLayout>
              <MisReservas />
            </CustomerLayout>
          }
        />
        <Route
          path="/login"
          element={
            <CustomerLayout>
              <Login />
            </CustomerLayout>
          }
        />
        <Route
          path="/register"
          element={
            <CustomerLayout>
              <Register />
            </CustomerLayout>
          }
        />
        <Route
          path="/ayuda"
          element={
            <CustomerLayout>
              <Ayuda />
            </CustomerLayout>
          }
        />
        <Route
          path="/reservar"
          element={
            <CustomerLayout>
              <Reservar />
            </CustomerLayout>
          }
        />
        {/* Rutas de empleados / administradores */}
        <Route
          path="/employee-home"
          element={
            <EmployeeLayout>
              <EmployeeHome />
            </EmployeeLayout>
          }
        />
        <Route
          path="/informes"
          element={
            <EmployeeLayout>
              <Informes />
            </EmployeeLayout>
          }
        />
        <Route
          path="/historial-reservas"
          element={
            <EmployeeLayout>
              <HistorialReservas />
            </EmployeeLayout>
          }
        />
        <Route
          path="/gestion-clientes"
          element={
            <EmployeeLayout>
              <GestionCliente />
            </EmployeeLayout>
          }
        />
        <Route
          path="/gestion-vehiculos"
          element={
            <EmployeeLayout>
              <GestionVehiculos />
            </EmployeeLayout>
          }
        />
        <Route
          path="/gestion-empleados"
          element={
            <EmployeeLayout>
              <GestionEmpleados />
            </EmployeeLayout>
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
