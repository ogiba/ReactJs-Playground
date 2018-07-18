import React, { Component } from 'react';
import logo from './logo.svg';
import Employee from './models/Employee';
import './App.css';

class App extends Component {

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    let employee = new Employee("bobo", "test");

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <input onChange={this.handleChange}/>
          <div>{employee.lastName}</div>
        </p>
      </div>
    );
  }
}

export default App;
