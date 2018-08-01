import React, { Component } from 'react';
import logo from '../logo.svg';
import Employee from '../models/Employee';
import TableRowItem from '../components/TableRowItem'
import EditTextView from "../components/EditTextView"
import TableHeadView from "../components/TableHeadView"

class Home extends Component {
    constructor() {
        super()
        this.state = {
          name: "",
          lastName: "",
          employees: []
        }
      }
    
      handleFirstNameChange = (event) => {
        console.log(event.target.value);
    
        this.setState({
          name: event.target.value
        })
      }
    
      handleLastNameChange = (event) => {
        console.log(event.target.value)
    
        this.setState({
          lastName: event.target.value
        })
      }
    
      addNewEmployee = (event) => {
        var currentEmployees = this.state.employees
    
        let name = this.state.name
        let lastName = this.state.lastName
        let employee = new Employee(name, lastName)
    
        currentEmployees.push(employee)
    
        console.log(currentEmployees.length)
        this.setState({
          name: "",
          lastName: "",
          employees: currentEmployees
        })
      }
    
      render() {
        const { name, lastName, employees } = this.state
    
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              Data binding test
            </p>
            <div>
              <div>
                <label>First name</label>
              </div>
              <EditTextView value={name} onChange={this.handleFirstNameChange} hint="Insert new employee first name" />
            </div>
            <div>
              <div>
                <label>Last name</label>
              </div>
              <EditTextView value={lastName} onChange={this.handleLastNameChange} hint="Insert new employee last name" />
            </div>
            <div>{name} {lastName}</div>
            <button onClick={this.addNewEmployee}>Add new Employee</button>
    
            <div>
              {JSON.stringify(employees)}
              <table>
                <TableHeadView columns={["First Name", "Last Name"]}/>
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

export default Home