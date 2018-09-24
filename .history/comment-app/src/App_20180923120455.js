import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Clock from './Clock'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }

  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }

  render() {
    return (
      <div>
        <Clock></Clock>
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}

export default App;
