import React, { useState, useEffect } from "react";
import Customers from "./Customers";

const url = "http://127.0.0.1:3001/api/customers";

const Paginas = (props) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch (url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: sessionStorage.getItem("Token"),
                    "Access-Control-Allow-Origin": "*",
                },
            });
                
            response.json().then((data) => {
                setCustomers(data);
            });
        }

        fetchData();
    }, []);

    return (
        <Customers items={customers}></Customers>
    );
};

export default Paginas;