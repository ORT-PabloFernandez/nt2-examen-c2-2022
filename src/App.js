import './App.css';
import Customer from './components/Customer';
import CustomerList from './components/CustomerList';
import CustomerLevelList from './components/CustomerLevelList';

import { useState, useEffect} from 'react'

function App() {
  const url = 'http://localhost:3000/api/customers?pageSize=20&page=3'
  const [data, setData] = useState([])

  useEffect(() => {
    try{
      fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
    }catch(error){
      console.error(error);
    }
  }, [])
  


  return (
    <>
      <CustomerList customers = {data} ></CustomerList>
      <CustomerLevelList customers = {data}></CustomerLevelList>
    </>
  );
}

export default App;
