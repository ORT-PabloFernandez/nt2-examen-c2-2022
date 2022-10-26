import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import UsersPage from "./Users/Pages/UsersPage";
import CustomerPage from "./Users/Pages/CustomerPage";
import GoldPage from "./Users/Pages/GoldPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UsersPage></UsersPage>;
        </Route>
        <Route path="/customer" exact>
          <CustomerPage></CustomerPage>;
        </Route>
        <Route path="/gold" exact>
          <GoldPage></GoldPage>;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
