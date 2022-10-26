import React, { useState, useEffect } from "react";
import CustomersGoldList from "../controllers/CustomersGoldList";

const CustomersGoldListPage = () => {
  let customersGold = [];
  const [customers, setCustomers] = useState([]);
  const url = "http://localhost:3001/api/customers";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  // customersGold = customers.filter((c) =>
  //   c.tier_and_details.find((cust) => cust.includes("Gold"))
  // );

  // let index = customers.length,
  //   current = [];

  // for (let i = 0; i < index; i++) {
  //   current = customers[i];
  //   let tier_and_details = current.tier_and_details;
  //   if (tier_and_details.includes("Gold")) {
  //     customersGold.add(current);
  //   }
  // }

  //customersGold = customers.filter((c) => c.email == "rebecca51@hotmail.com");

  customers.map((cust) => {
    for (let c in cust.tier_and_details) {
      if (cust.tier_and_details[`${c}`].tier == "Gold") {
        customersGold.push(c);
      }
    }
  });

  console.log(customersGold);

  return (
    <>
      <CustomersGoldList items={customersGold} />
    </>
  );
};

export default CustomersGoldListPage;
