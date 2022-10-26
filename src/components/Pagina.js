import React, { useState, useEffect } from "react";
import Customers from "./Customers";

const url = "http://127.0.0.1:3001/api/customers/";

const Pagina = (props) => {
  let truUrl = `${url}?pageSize=${props.pageSize}&page=${props.page}`;
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(truUrl, {
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

  return <Customers clientes={clientes}></Customers>;
};
export default Pagina;
