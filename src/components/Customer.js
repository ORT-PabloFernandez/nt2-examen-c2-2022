import React from "react";
import Card from "react-bootstrap/Card";

function Customer(props) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>Username: {props.username}</Card.Title>
                <Card.Title>Name: {props.name}</Card.Title>
                <Card.Title>Address: {props.address}</Card.Title>
                <Card.Title>Birthday: {props.birthday}</Card.Title>
                <Card.Title>Email: {props.email}</Card.Title>
                <Card.Title>Accounts: {props.accounts}</Card.Title>
                <br></br>
            </Card.Body>
        </Card>
    )
}

export default Customer;