import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customer = ({ data }) => {
    const levels = data.tier_and_details
    const levelsLength = Object.entries(levels).length
    return (
    <>
    {/* <div>Customer</div> */}
    <Card style={{ width: '18rem', margin: '10px 20px'}}>
      <Card.Header>{data.username}'s data:</Card.Header>
      {console.log(Object.entries(data.tier_and_details).length)}
      <Card.Body>
        {/* <Card.Text> */}
        <ListGroup variant="flush">
            <ListGroup.Item> username: {data.username}</ListGroup.Item>
            <ListGroup.Item> name: {data.name}</ListGroup.Item>
            <ListGroup.Item> address: {data.address}</ListGroup.Item>
            <ListGroup.Item> birthdate: {data.birthdate}</ListGroup.Item>
            <ListGroup.Item> email: {data.email}</ListGroup.Item>
            <ListGroup.Item> accounts: {data.accounts.map((acc) => (
                <Badge bg="secondary">{acc}</Badge> ))}
            </ListGroup.Item>
            {levelsLength > 0 && 
                <ListGroup.Item>
                    <Badge bg="warning">with levels</Badge>
                </ListGroup.Item>
            }
        </ListGroup>
        {/* </Card.Text> */}
        {/* <Button variant="primary"> a </Button> */}
      </Card.Body>
    </Card>
    </>
  )
}

export default Customer