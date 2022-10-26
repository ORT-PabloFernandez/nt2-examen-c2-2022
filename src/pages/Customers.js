import React, {useEffect, useState} from 'react';
import CustomersTable from '../custommer/components/CustomersTable';
import CustomersTableGold from '../custommer/components/CustomersTableGold';

export default function Custommers(){
    const URL = "http://localhost:3001/api/customers";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <CustomersTable items={users}/>
            <CustomersTableGold items={users}/>
        </div>
    
    );

}