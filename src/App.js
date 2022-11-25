import './App.css';
import CustomerList from './components/CustomerList';
import CustomerLevelList from './components/CustomerLevelList';
import database from './data/customers100.json'
import Button from 'react-bootstrap/Button'
import ButtonGroup from './components/ButtonGroup';

import { useState, useEffect} from 'react'

function App() {
  // const url = 'http://localhost:3000/api/customers?pageSize=70&page=3'
  const [data, setData] = useState([])
  const [option, setOption] = useState('customers')
  
  useEffect(() => {
    // try{
    //   fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    // }catch(error){
    //   console.error(error);
    // }
    setData(database)
  }, [])
  
  const changeState = (value) => {
    setOption(value)
  }

  return(
    <>
      <div style={{background: 'grey'}}>
        <h1 style={{margin: 'auto', padding: '40px 0px 20px 0px', textAlign: 'center', color: 'white'}}> {option === 'customers' ? 'List of Customers' : 'List of Gold Customers'} </h1>
        <ButtonGroup state={option} changeState={changeState}/>
      </div>
      <div style={{background: '#aeaeae', width: '100%', height:'calc(100vh - 166px)'}}>
        {option === 'customers' ?
        <CustomerList customers = {data}></CustomerList>
        :
        <CustomerLevelList customers = {data}></CustomerLevelList>
        }
      </div>
    </>
  );
}

export default App;