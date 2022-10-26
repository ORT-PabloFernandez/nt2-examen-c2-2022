import React from "react";
import "./Customer.css";

const Customer = (props) => {
  return (
    <li className="">
      <div className="">
        <h2>{props.username}</h2>
        <h2>{props.name}</h2>
        <h2>{props.address}</h2>
        <h2>{props.birthdate}</h2>
        <h2>{props.email}</h2>
        <h2>{props.accounts}</h2>
      </div>
    </li>
  );
};

export default Customer;
