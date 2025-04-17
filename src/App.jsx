import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import CadastroDispositivos from './components/CadastroDispositivos';
import Elaboracao from './components/Elaboracao';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Cadastro} />
        <Route path="/cadastro-dispositivos" component={CadastroDispositivos} />
        <Route path="/elaboracao" component={Elaboracao} />
      </Switch>
    </Router>
  );
};

export default App;