// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/nav_bar/Navbar";
import { CatalogoCarros } from "./pages/catalogo_carros/CatalogoCarros";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Footer } from "./components/footer/Footer";
import { Reservar } from "./pages/reservar/Reservar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/catalogo" element={<CatalogoCarros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
