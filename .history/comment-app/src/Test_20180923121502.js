import React, { Component } from 'react';

class Test extends Component {
    componentDidMount() {
        this.input.focus()
    }

    render() {
        return (this.props.children)
    }
}

export default Test;
