import React, { Component } from 'react';
import logo from '../logo.svg';
import Employee from '../models/Employee';
import TableRowItem from '../components/TableRowItem'
import EditTextView from "../components/EditTextView"
import TableHeadView from "../components/TableHeadView"

class NewEmployee extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        )
    }
}

export default NewEmployee