import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isShowClock: true
    }
  }

  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render() {
    return (
      <div>
        <Test>
          <h2>7897897</h2>
        </Test>
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}

export default App;
