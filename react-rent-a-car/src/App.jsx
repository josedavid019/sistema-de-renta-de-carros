import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/nav-bar/Navbar";
import { CatalogoCarros } from "./pages/catalogo_carros/CatalogoCarros";
import { MisReservas } from "./pages/mis-reservas/MisReservas";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Footer } from "./components/footer/Footer";
import { Ayuda } from "./pages/ayuda/Ayuda";
import { Reservar } from "./pages/reservar/Reservar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoCarros />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
