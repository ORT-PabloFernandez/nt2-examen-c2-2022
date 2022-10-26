import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const url = "http://127.0.0.1:3001/api/customers/";

const Customer = (props) => {
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

  const cliente = clientes.filter((cliente) => cliente.email == props.email);

  return (
    <div>
      <h2>name = {cliente[0].name}</h2>
      <h2>address = {cliente[0].address}</h2>
      <h2>birthdate = {cliente[0].birthdate}</h2>
      <h2>email = {cliente[0].email}</h2>
    </div>
  );
};
export default Customer;
