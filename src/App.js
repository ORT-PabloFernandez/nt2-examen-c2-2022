import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./costumers/pages/Home";
import Nav from "./components/Nav";
function App() {
  const PAGE = 3;
  const SIZE = 10;
  const [costumers, setCostumers] = useState([]);

  function fetchCosutmers(size, pages) {
    fetch(`http://localhost:3002/api/customers?pageSize=${size}&page=${pages}`)
      .then((result) => result.json())
      .then((data) => setCostumers(data));
  }
  const [pagina, setPaginas] = useState(PAGE);
  const prev = pagina - 1;
  const next = pagina + 1;

  function onPrev() {
    if (prev < 1) {
    } else {
      setPaginas(prev);
      fetchCosutmers(SIZE, prev);
    }
  }

  function onNext() {
    setPaginas(next);

    fetchCosutmers(SIZE, next);
  }

  useEffect(() => {
    fetchCosutmers(SIZE, PAGE);
  }, []);
  console.log(costumers);
  return (
    <div>
      <Nav onNext={onNext} onPrev={onPrev}></Nav>
      <Home costumers={costumers}></Home>
    </div>
  );
}

export default App;
