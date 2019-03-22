import React, { Component } from 'react';
import './App.css';
import {Tabs} from 'antd'

import CompoundComponent from './ReactDesignPattern/CompoundComponent'
const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompoundComponent />
      </div>
    );
  }
}

export default App;
