import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Customers from './views/CustomerList';
import CustomersGold from './views/CustomerListGold';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>Parcial PNT2</h1>
            <h2>Ezequiel Matias Hoyos Souto</h2>
            <a href='/customers'>Listado de Clientes</a>
            <br></br>
            <a href='/customersGold'>Listado de Clientes Gold</a>
          </div>
        </Route>
        <Route path="/customers" exact>
            <Customers></Customers>
        </Route>
        <Route path="/customersGold" exact>
            <CustomersGold></CustomersGold>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
