import React from "react";
import "./styles.css";

const Home = ({ costumers }) => {
  return (
    <div className="App">
      <h1>Meet our costumers</h1>
      {costumers.map((c, index) => (
        <div key={index} className="costumers">
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
