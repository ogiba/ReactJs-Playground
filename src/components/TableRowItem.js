import React, { Component } from 'react';

class TableRowItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.lastName}</td>
            </tr>
        )
    }
}

export default TableRowItem