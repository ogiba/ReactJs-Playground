import React, { Component } from 'react';
import logo from './logo.svg';
import Employee from './models/Employee';
import TableRowItem from './templates/TableRowItem'
import { EditTextView } from "./templates/EditTextView";
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
      name: "",
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
          Data binding test
        </p>
        <input value={name} onChange={this.handleChange} />
        {/* <EditTextView /> */}
        <div>{name}</div>
        <button onClick={this.addNewEmployee}>Add new Employee</button>

        <div>
          {JSON.stringify(employees)}
          <table>
            <thead>
              <tr>
                <td>Fist name</td>
                <td>Last name</td>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (<TableRowItem name={employee.name}
                  lastName={employee.lastName} />)
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
