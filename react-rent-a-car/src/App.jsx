import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { Navbar } from "./components/nav-bar/Navbar";
import { Footer } from "./components/footer/Footer";

import { Home } from "./pages/home/Home";
import { CatalogoCarros } from "./pages/catalogo_carros/CatalogoCarros";
import { MisReservas } from "./pages/mis-reservas/MisReservas";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Ayuda } from "./pages/ayuda/Ayuda";
import { Reservar } from "./pages/reservar/Reservar";

import { Admin } from "./pages/employees/Admin";
import { Receptionist } from "./pages/employees/receptionist";
import { Informes } from "./pages/informes/Informes";
import { HistorialReservas } from "./pages/historial-reservas/HistorialReservas";
import { GestionClientes } from "./pages/gestion-clientes/GestionClientes";
import { CrearCliente } from "./components/formulario-cliente/CrearCliente";
import { EditarCliente } from "./components/formulario-cliente/EditarCliente";
import { VerCliente } from "./components/formulario-cliente/VerCliente";
import { GestionVehiculos } from "./pages/gestion-vehiculos/GestionVehiculos";
import { GestionEmpleados } from "./pages/gestion-empleados/GestionEmpleados";
import { CarrosPorCategoria } from "./pages/catalogo_carros/CarrosPorCategoria";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Todos */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoCarros />} />
        <Route path="/catalogo/:categoria" element={<CarrosPorCategoria />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/reservar" element={<Reservar />} />
        {/* Rutas protegidas para el admin */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/clientes" element={<GestionClientes />} />
          <Route path="/clientes/crear" element={<CrearCliente />} />
          <Route path="/clientes/editar/:id" element={<EditarCliente />} />
          <Route path="/clientes/ver/:id" element={<VerCliente />} />
          <Route path="/vehiculos" element={<GestionVehiculos />} />
          <Route path="/gestion-empleados" element={<GestionEmpleados />} />
          {/* <NavbarEmployee /> */}
        </Route>
        {/* Rutas protegidas para el recepcionista y admin */}
        <Route
          element={<PrivateRoute allowedRoles={["admin", "recepcionista"]} />}
        >
          <Route path="/recepcionista" element={<Receptionist />} />
          <Route path="/historial-reservas" element={<HistorialReservas />} />
        </Route>
        {/* Rutas protegidas para el personal de recepción */}
        <Route element={<PrivateRoute allowedRoles={["personal_recepcion"]} />}>
          <Route path="/informes" element={<Informes />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
