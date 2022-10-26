import React from "react";
import Customer from "./Customer";

import "./CustomerList.css";

const CustomerGoldList = (props) => {
  const customers = [];

  const result = props.items.map((customer) => {
    for (const key in customer) {
      if (Object.hasOwnProperty.call(customer, key)) {
        const element = customer[key];
        if (element === "Gold") {
          customers.push(customer);
        }
      }
    }
  });

  return (
    <ul className="customers-list">
      {result.items.map((customer) => (
        <Customer username={customer.username} name={customer.name}></Customer>
      ))}
    </ul>
  );
};

export default CustomerGoldList;
