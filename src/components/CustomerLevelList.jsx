import React from 'react'
import CustomerLevels from './CustomerLevels'

const CustomerLeveList = (props) => {
    const cant = props.customers
    const customersGoldTier = []
    
    cant.map((customer) => {
      for (let cus in customer.tier_and_details) {
        if (customer.tier_and_details[cus].tier === "Gold") {
          // const a = customer.tier_and_details[cus].tier
          customersGoldTier.push(customer)
          // console.log(a)
        }
      }
    });

    // console.log(customersGoldTier.length)

    return (
      <div style={{background: '#aeaeae' , padding: '20px 0px'}}>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {customersGoldTier.map((customer) => <CustomerLevels data = {customer} style={{minWidth: '270px'}}></CustomerLevels> )}
        </div>
      </div>
    );
}

export default CustomerLeveList