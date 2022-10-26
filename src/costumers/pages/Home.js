import React from "react";
import Costumers from "../components/Costumers";
import CostumersGold from "../components/CostumersGold";

const Home = ({ costumers }) => {
  return (
    <div>
      <div>
        <h3>Costumers</h3>
        <Costumers costumers={costumers}></Costumers>
      </div>
      <div>
        <h3>Costumers Gold</h3>
        <CostumersGold costumers={costumers}></CostumersGold>
      </div>
    </div>
  );
};
export default Home;
