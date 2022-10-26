import React from "react";
import Pagina from "../components/Pagina";

const Customers = (props) => {
  return <Pagina pageSize={props.pageSize} page={props.page} />;
};

export default Customers;
