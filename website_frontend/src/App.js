import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home';
import AddMatAlapTask from './Pages/AddMatAlapTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
      <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1"><Link to="/home">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2"><Link to="/addMatek">Matek feladat hozzáadás</Link></Nav.Link>
  </Nav.Item>
</Nav>
      <Switch>
          <Route exact path="/addMatek">
          <AddMatAlapTask />           
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/sdf">
          </Route>
        </Switch>
      </Router>  
    </div>)
  };
}

export default App;
