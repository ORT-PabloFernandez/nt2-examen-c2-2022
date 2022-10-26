import React, { useState, useEffect } from "react";
import CustomerItem from "./CustomerItem";

const CustomerComponent = (props) => {
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
        setUsers(data);
      });
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {Users.map((user) => {
          return (
            <CustomerItem
              username={user.username}
              name={user.name}
              address={user.address}
              birthdate={user.birthdate}
              email={user.email}
              accounts={user.accounts}
            ></CustomerItem>
          );
        })}
      </ul>
      {console.log(Users)}
    </div>
  );
};

export default CustomerComponent;
