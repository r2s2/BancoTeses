import React from 'react';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li><a href="/">Elaboração</a></li>
          <li><a href="/cadastro">Cadastro de Teses</a></li>
          <li><a href="/cadastro-dispositivos">Cadastro de Dispositivos</a></li>
        </ul>
      </nav>
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;