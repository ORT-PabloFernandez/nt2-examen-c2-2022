import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./costumers/pages/Home";
function App() {
  const PAGE = 3;
  const SIZE = 10;
  const [costumers, setCostumers] = useState([]);

  function fetchCosutmers(size, pages) {
    fetch(`http://localhost:3002/api/customers?pageSize=${size}&page=${pages}`)
      .then((result) => result.json())
      .then((data) => setCostumers(data));
  }

  useEffect(() => {
    fetchCosutmers(SIZE, PAGE);
  }, []);
  console.log(costumers);
  return <Home costumers={costumers}></Home>;
}

export default App;
