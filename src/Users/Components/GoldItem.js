import React from "react";

const GoldItem = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <ul>
        {props.benefits.map((b) => (
          <li>{b}</li>
        ))}
      </ul>
      {/* <h3>{props.tier_and_details}</h3> */}
    </div>
  );
};

export default GoldItem;
