import React from "react";
import Customer from "./Customer";

import "./CustomerList.css";

function CustomerList(props) {
  return (
    <ul className="customers-list">
      {props.items.map((customer) => (
        <Customer
          username={customer.username}
          name={customer.name}
          address={customer.address}
          birthdate={customer.birthdate}
          email={customer.email}
          accounts={customer.accounts}
        ></Customer>
      ))}
    </ul>
  );
}

export default CustomerList;
