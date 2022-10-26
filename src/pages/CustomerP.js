import React from "react";
import Customer from "../components/Customer";

const Customers = (props) => {
  return <Customer email={props.email} />;
};

export default Customers;
