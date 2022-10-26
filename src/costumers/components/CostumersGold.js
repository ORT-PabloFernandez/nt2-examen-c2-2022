import React, { useState, useEffect } from "react";
import Costumer from "./Costumer";
import TableHead from "./TableHead";

const CostumersGold = ({ costumers }) => {
  const array = [];
  costumers.map((item) => {
    for (const prop in item.tier_and_details) {
      console.log(item.tier_and_details[`${prop}`]);
      if (item.tier_and_details[`${prop}`].tier === "Gold") {
        array.push(item);
      }
    }
  });

  return (
    <div className="card">
      <table>
        <TableHead></TableHead>
        {array.map((costumer) => {
          return <Costumer costumer={costumer}></Costumer>;
        })}
      </table>
    </div>
  );
};
export default CostumersGold;
