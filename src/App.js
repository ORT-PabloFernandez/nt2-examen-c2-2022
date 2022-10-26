import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerList from "./Customer/components/CustomerList";
import CustomersP from "./Customer/pages/CustomersP";
import CustomersGoldP from "./Customer/pages/CustomersGoldP";
import "./App.css";

function App() {
  const apiCustomerUrl =
    "http://localhost:3001/api/customers?pageSize=10&page=5";

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(apiCustomerUrl)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CustomerList items={customers} />
        </Route>
        <Route path="/customers" exact>
          <CustomersP></CustomersP>
        </Route>
        <Route path="/customers/gold" exact>
          <CustomersGoldP items={customers}></CustomersGoldP>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
