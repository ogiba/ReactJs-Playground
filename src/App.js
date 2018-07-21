import React, { Component } from 'react';
import logo from './logo.svg';
import Employee from './models/Employee';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      employees: []
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({
      name: event.target.value
    })
  }

  addNewEmployee = (event) => {
    var currentEmployees = this.state.employees

    let name = this.state.name
    let employee = new Employee(name, "Test")

    currentEmployees.push(employee)

    console.log(currentEmployees.length)
    this.setState({
      employees: currentEmployees
    })
  }

  render() {
    const { name, employees } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>Data binding test</div>

          <input value={name} onChange={this.handleChange} />
          <div>{name}</div>
          <button onClick={this.addNewEmployee}>Add new Employee</button>

          <div>
            {JSON.stringify(employees)}
            <table>
              <thead>
                <td>Fist name</td>
                <td>Last name</td>
              </thead>
              <tbody>
                {employees.map((employee) => {
                  return (
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.lastName}</td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
