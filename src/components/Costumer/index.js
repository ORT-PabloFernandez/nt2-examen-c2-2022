import React, { useEffect, useState } from "react";
import "./styles.css";

const Costumer = (props) => {
  const costumer = props.costumers.find((c) => c.name === "Debra Gross");
  return (
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
};

export default Costumer;
