import React, { useState, useEffect } from "react";

const url = "http://127.0.0.1:3001/api/customers/";

const Nivel = (props) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      response.json().then((data) => {
        setClientes(data);
      });
    }

    fetchData();
  }, []);

  const clienteNivel = clientes.filter(
    (cliente) => cliente.tier_and_details.tier == props.Nivel
  );

  return (
    <div>
      <h2>{clienteNivel[0].tier_and_details.tier}</h2>
      <h3>{clienteNivel[0].tier_and_details.benefits}</h3>
      <Customers clientes={clienteNivel}></Customers>
    </div>
  );
};
export default Nivel;
