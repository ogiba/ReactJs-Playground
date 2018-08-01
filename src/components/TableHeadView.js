import React, { Component } from 'react';

class TableHeadView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: this.props.columns
        }
    }

    render() {
        const { columns } = this.state

        return (
            <thead>
                <tr>
                    {columns.map(columnName => {
                        return <td>{columnName}</td>
                    })}
                </tr>
            </thead>
        )
    }
}

export default TableHeadView