import React from "react";
import { Routes, Route } from "react-router-dom";
// Update the import paths based on where your components actually are
import Cadastro from "./pages/Cadastro";  // This must match the actual location
import CadastroDispositivos from "./pages/CadastroDispositivos";
import Elaboracao from "./pages/Elaboracao";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Elaboracao />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastro-dispositivos" element={<CadastroDispositivos />} />
    </Routes>
  );
}