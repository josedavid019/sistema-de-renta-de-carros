// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { CatalogoCarros } from "./pages/CatalogoCarros";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoCarros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
