import React from 'react';

export default function Custommer(props){
    return (
        <div>
            <label>username: {props.username}</label>
            <br/>
            <labe>name: {props.name}</labe>
            <br/>
            <label>address: {props.address}</label>
            <br/>
            <label>birthdate: {props.birthdate}</label>
            <br/>
            <label>email: {props.email}</label>
            <br/>
            <label>accounts: {props.accounts}</label>
        </div>
    );
}