import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerLevels = ({data}) => {
    const levels = data.tier_and_details
    const levelsLength = Object.entries(levels).length
    const arrayLevels = Object.keys(levels);

    const benefits = []
    for (let cus in levels) {
        if (data.tier_and_details[cus].tier === "Gold") {
            benefits.push(data.tier_and_details[cus].benefits)
    }}
    console.log(benefits)
  return (
    <>
    <Card style={{ width: '18rem', margin: '10px 20px'}}>
        <Card.Header>{data.username}'s level:</Card.Header>
        <Card.Body>
        <ListGroup variant="flush">
            <ListGroup.Item> accounts: {data.accounts.map((acc) => (
                <Badge bg="primary">{acc}</Badge> ))}
            </ListGroup.Item>
            {benefits.map((ben) => (
                <ListGroup.Item>
                    {ben.map((b)=>(
                    <Badge bg="warning">{b}</Badge>
                    ))}
                </ListGroup.Item> ))}
            {/* {levelsLength > 0 && 
                <ListGroup.Item> level:
                    {data.accounts.map((acc) => (
                    <Badge bg="warning">{acc}</Badge> ))}
                </ListGroup.Item>
            } */}
        </ListGroup>
        </Card.Body>
    </Card>
    </>
)
}

export default CustomerLevels