import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, } from 'react-router-dom'
import Home from "./scenes/Home"
import NewEmployee from "./scenes/NewEmployee"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => {
            return <Home />
          }} />
          <Route exact path="/test" render={() => {
            return <div>Routing test</div>
          }} />
           <Route exact path="/employee/new" render={() => {
            return <NewEmployee />
          }} />
        </div>
      </Router>
    )
  }
}

export default App;
