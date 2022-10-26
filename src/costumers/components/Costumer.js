import React from "react";

const Costumer = ({ costumer }) => {
  return (
    <tbody>
      <td>
        <a href="#">{costumer.username}</a>
      </td>
      <td>{costumer.name}</td>
      <td>{costumer.address}</td>
      <td>{costumer.birthdate}</td>
      <td>{costumer.email}</td>
      <td>{costumer.accounts}</td>
    </tbody>
  );
};
export default Costumer;
