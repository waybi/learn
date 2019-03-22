import React from 'react';

class TabItem extends React.Component {
  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }

  render() {
    const {active, onClick} = this.props;

    const tabStyle = {
      'maxWidth': '150px',
      color: active ? 'red' : 'green',
      border: active ? '1px red solid' : '0px',
    };

    return (
      <h1 style={tabStyle} onClick={onClick}>
        {this.props.children}
      </h1>
    );
  }


};

export default TabItem
