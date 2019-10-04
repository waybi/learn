import React, { Component } from "react";
import PropTypes from "prop-types";
// import { connect } from './react-redux'
import { connect } from "react-redux";

class Header extends Component {
  static propTypes = {
    store: PropTypes.string
  };
  render() {
    return (
      <h1 style={{ color: this.props.themeColor }}>
        React.js 小书作者:{this.props.name}
      </h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor,
    name: "waybe"
  };
};

Header = connect(mapStateToProps)(Header);
export default Header;
