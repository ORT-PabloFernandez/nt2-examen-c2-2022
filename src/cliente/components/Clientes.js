import React, { useState, useEffect } from "react";
import Cliente from "./Cliente";

const url = "http://127.0.0.1:3001/api/customers?pageSize=10&page=1";

const Clientes = (props) => {
  const [clientes, setClientes] = useState([]);
  const [page, setPage] = useState(1);

  function HandlerClick_Button_der(event) {
    setPage(page + 1);
  }

  function HandlerClick_Button_izq(event) {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response
        .json()
        .then((data) => setClientes(data))
        .catch((error) => console.error(error));
    }

    fetchData();
  }, [page]);

  return (
    <div>
      <ul>
        {clientes.map((cliente) => (
          <div className="divisor">
            <Cliente
              username={cliente.username}
              name={cliente.name}
              address={cliente.address}
              birthdate={cliente.birthdate}
              email={cliente.email}
              accounts={cliente.accounts}
            ></Cliente>
          </div>
        ))}
      </ul>
      <button onClick={HandlerClick_Button_izq}>menos</button>
      <button onClick={HandlerClick_Button_der}>Mas</button>
    </div>
  );
};

export default Clientes;
