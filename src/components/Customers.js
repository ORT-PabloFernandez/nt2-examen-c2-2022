import React from "react";
import Table from "react-bootstrap/Table";

const Customers = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>username</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {props.clientes.map((cleinte) => (
          <tr>
            <td>{cleinte.username}</td>
            <td>{cleinte.name}</td>
            <td>{cleinte.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Customers;
