import React from 'react';
import Custommer from '../custommer/components/Customer';
import { useLocation } from 'react-router-dom'

export default function CustommerDetails(props){
    const customer = props.location.state
    console.log("Customer")
    console.log(customer);
    return(
    <Custommer 
    username = {customer.username}
    name = {customer.name}
    address = {customer.address}
    birthdate = {customer.birthdate}
    email = {customer.email}
    accounts = {customer.accounts}
    />);
}