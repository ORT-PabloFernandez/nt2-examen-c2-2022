import React, { useEffect, useState } from "react";
import "./styles.css";

const GoldCostumers = ({ costumers }) => {
  console.log(costumers.length);
  return (
    <div className="App">
      <h1>Meet our GOLD costumers</h1>
      {costumers.map((c, index) => {
        for (const tiger in c.tier_and_details.tiger) {
          if (tiger === "Gold") {
            return (
              <div>
                <p>{c.name}</p>
                <p>{c.benefits[0]}</p>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default GoldCostumers;
