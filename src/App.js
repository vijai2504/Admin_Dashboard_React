import React, { Component } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import ListEmployee from "./components/listEmployee";
import AddEmployee from "./components/addEmployee";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/list-employee">
              <ListEmployee />
            </Route>
            <Route exact path="/add-employee">
              <AddEmployee />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
