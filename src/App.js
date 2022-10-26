import logo from './logo.svg';
import './App.css';
import Customers from './pages/Customers';
import CustomerDetail from './pages/CustomerDetails';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return(
    <Router>
      <Switch>
        <Route path ="/" component={Customers} exact>
        </Route>
        <Route path='/customer/:id' component={CustomerDetail} exact>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
