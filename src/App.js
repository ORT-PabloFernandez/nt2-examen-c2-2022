import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import Costumer from "./components/Costumer";
import GoldCostumers from "./components/GoldCostumers";

function App() {
  const [costumers, setCostumers] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3000/api/customers";
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setCostumers(data));
    } catch (e) {
      console.log("Error fetching the API: ", e);
    }
  }, []);
  const costumer = costumers.find((c) => c.name === "Debra Gross");
  return (
    <>
      <Home costumers={costumers} />
      <div>
        <div>
          {/*<h1>{costumer.name}</h1>*/}
          <h6>USERNAME: {costumer.username}</h6>
        </div>
        <div>
          <p>Adrees: {costumer.address}</p>
          <p>Birthday: {costumer.birthdate}</p>
          <p>Email: {costumer.email}</p>
          <p>Accounts: {costumer.accounts}</p>
        </div>
      </div>
      );
      {/*<GoldCostumers costumers={costumers} />*/}
    </>
  );
}

export default App;
