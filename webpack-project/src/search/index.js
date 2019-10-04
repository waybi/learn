/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import logo from './img/logo.png';
import '../../common';

class Search extends React.Component {
  loadComponent() {
    import('./text').then((text) => {
      console.log('loadComponent>>', text.default());
    });
  }

  render() {
    return (
      <h2 className={style.text}>
        Search Text
        <img src={logo} alt="" />
        <button type="button" onClick={this.loadComponent.bind(this)} />
      </h2>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('root'));
