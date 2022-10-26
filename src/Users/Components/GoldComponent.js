import React, { useState, useEffect } from "react";
import GoldItem from "./GoldItem";
var Constants = require("../../Componets/Constants");

const GoldComponent = (props) => {
  const [Users, setUsers] = useState([]);

  let url = "http://127.0.0.1:3001/api/customers";
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "applications/json",
        },
      });

      response.json().then((data) => {
        //  setUsers(data.filter((user) => Object.entries(user.tier_and_details).map()));
        setUsers(data);
      });
    }

    fetchData();
  }, []);

  //Filtrar
  let usersNew = Users.map((user) => ({
    name: user.name,
    tier_and_details: Object.keys(user.tier_and_details).map((key) => ({
      tier: user.tier_and_details[key].tier,
      benefits: user.tier_and_details[key].benefits,
    })),
  }));

  let gold = usersNew.filter(
    (user) =>
      user.tier_and_details.filter((item) => item.tier === "Gold").length > 0
  );

  return (
    <div>
      <ul>
        {gold.map((user) => {
          return (
            <GoldItem
              name={user.name}
              tier_and_details={user.tier_and_details}
            ></GoldItem>
          );
        })}
      </ul>
    </div>
  );
};

export default GoldComponent;
