import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import '../../common';

class Index extends React.PureComponent {
  render() {
    return (
      <h2 className="home">
        首页
        <a href="./search.html">search</a>
      </h2>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
