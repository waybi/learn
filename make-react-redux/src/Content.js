import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import { connect } from "./react-redux";
// import { connect } from 'react-redux'

class Content extends Component {
  static propTypes = {
    store: PropTypes.object
  };

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  };
};

Content = connect(mapStateToProps)(Content);
export default Content;

function fn(store) {
  return function(next) {
    return function(action) {
      console.log("beforeState", store.getState());
      next(action);
      console.log("nextState", store.getState());
    };
  };
}
