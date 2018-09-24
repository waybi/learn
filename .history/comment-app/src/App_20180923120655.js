import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        {this.state.isShowClock ? <Clock /> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}

export default App;
