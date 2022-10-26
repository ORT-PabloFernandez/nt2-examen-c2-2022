import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Customers from "./pages/CustomersP";
import Customer from "./pages/CustomerP";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>PARCIAL PNT2</h1>
            <h2>FRANCISCO RODRIGO</h2>
          </div>
        </Route>
        <Route path="/Customers" exact>
          <Customers pageSize={10} page={1} />
        </Route>
        <Route path="/Customer" exact>
          <Customer email={"stacey30@gmail.com"} />
        </Route>
        <Route path="/Niveles" exact>
          <Customer nivel={"Gold"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
