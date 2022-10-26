import { React } from "react";
import Table from 'react-bootstrap/Table';

const Customers = (props) => {
  return (
    <Table border="2">
        <thead>
            <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Address</th>
                <th>Birthday</th>
                <th>Email</th>
                <th>Accounts</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map(item => {
            return (
                <tr key={item._id}>
                    <td><a href="">{ item.username }</a></td>
                    <td>{ item.name }</td>
                    <td>{ item.address }</td>
                    <td>{ item.birthday }</td>
                    <td>{ item.email }</td>
                    <td>{ item.accounts }</td>
                </tr>
            );
            })}
        </tbody>
    </Table>
    );
};

export default Customers;