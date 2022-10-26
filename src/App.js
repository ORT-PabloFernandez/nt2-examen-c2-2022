import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from "./components/PaginaPrincipal";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GoldCustomers from "./components/goldCustomers";
import Customer from "./components/customer";


function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/customer/:userId">
              <Customer />
            </Route>
            <Route path="/goldcustomers">
              <GoldCustomers />
            </Route>
          <Route path="/">
              <PaginaPrincipal />
          </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
