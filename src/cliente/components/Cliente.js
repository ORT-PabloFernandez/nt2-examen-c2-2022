import React from "react";
import "./Cliente.css";

const Cliente = (props) => {
  return (
    <li className="clientes-list">
      <div>
        <h2>{props.username}</h2>
        <p>{props.name}</p>
        <p>{props.address}</p>
        <p>{props.birthdate}</p>
        <p>{props.email}</p>
        <ul>
          {props.accounts.map((cuenta) => (
            <li>{cuenta}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Cliente;
