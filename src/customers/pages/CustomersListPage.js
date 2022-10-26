import React, { useState, useEffect } from "react";
import CustomersList from "../controllers/CustomersList";

const CustomersListPages = () => {
  const [customers, setCustomers] = useState([]);
  const url = "http://localhost:3001/api/customers";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  });

  return (
    <>
      <CustomersList items={customers} />
    </>
  );
};

export default CustomersListPages;
