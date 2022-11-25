import React from 'react'
import Button from 'react-bootstrap/Button'

const ButtonGroup = (props) => {
    const changeType = () => {
        props.state === 'customers' ? props.changeState('goldCustomers') : props.changeState('customers')
    }
    let styleNormal = {margin: '10px 20px'}
    let styleSelected = {
        ...styleNormal, border:'solid 1px white'
    }
    return(
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Button variant='secondary' style={props.state === 'customers' ? styleSelected : styleNormal} onClick={changeType} disabled={props.state === 'customers'}>show ALL customers</Button>
          <Button variant='secondary' style={props.state === 'goldCustomers' ? styleSelected : styleNormal} onClick={changeType} disabled={props.state === 'goldCustomers'}>show GOLD customers</Button>
        </div>
    );
}

export default ButtonGroup