import React from "react";

const CustomerItem = (props) => {
  return (
    <div>
      <h2>{props.username}</h2>
      <h3>{props.name}</h3>
      <h3>{props.address}</h3>
      <h3>{props.birthdate}</h3>
      <h3>{props.email}</h3>
      <h3>{props.accounts}</h3>
    </div>
  );
};

export default CustomerItem;
