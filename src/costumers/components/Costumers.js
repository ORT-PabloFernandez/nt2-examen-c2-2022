import React from "react";
import Costumer from "./Costumer";
import TableHead from "./TableHead";

const Costumers = ({ costumers }) => {
  return (
    <div className="card">
      <table className="table">
        <TableHead></TableHead>
        {costumers.map((costumer) => {
          return <Costumer costumer={costumer}></Costumer>;
        })}
      </table>
    </div>
  );
};
export default Costumers;
