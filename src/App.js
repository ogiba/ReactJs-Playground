import React, { Component } from 'react';
import logo from './logo.svg';
import Employee from './models/Employee';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({
      name: event.target.value
    })
  }

  render() {
    const {name} = this.state
    let employee = new Employee("bobo", "test");

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>Data binding test</div>

          <input value={name} onChange={this.handleChange}/>
          <div>{name}</div>
        </p>
      </div>
    );
  }
}

export default App;
