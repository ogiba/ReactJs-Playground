import React, { Component } from 'react';

class EditTextView extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return  <input value={this.props.name} 
        onChange={this.props.onChange} />
    }
}

export default EditTextView