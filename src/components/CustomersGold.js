import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Customer from "./Customer";

const CustomersGold = (props) => {
  return (
        <CardGroup>
            {props.items
            .filter( tier => props.items.tier_and_details === tier)  
            .map((customer) => (
                <Customer
                    username={customer.username}
                    name={customer.name}
                    address={customer.address}
                    birthday={customer.birthday}
                    email={customer.email}
                    accounts={customer.accounts}
                ></Customer>
            ))}
        </CardGroup>
    );
};

export default CustomersGold;