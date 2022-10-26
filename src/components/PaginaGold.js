import React, { useState, useEffect } from "react";
import CustomersGold from "./CustomersGold";

const url = "http://127.0.0.1:3001/api/customers";

const PaginasGold = (props) => {
    const [customersGold, setCustomersGold] = useState([]);

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
                setCustomersGold(data);
            });
        }

        fetchData();
    }, []);

    return (
        <CustomersGold items={customersGold}></CustomersGold>
    );
};

export default PaginasGold;