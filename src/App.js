import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomersList from "./customers/pages/CustomersListPage";
import CustomersGoldList from "./customers/pages/CustomersGoldListPage";
//import Customer from "./customers/controllers/Customers";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CustomersList />} />
        <Route path="/gold" exact element={<CustomersGoldList />} />
        {/* <Route path="/customer/:id" exact element={<Customer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
