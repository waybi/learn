import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
// import App from './App';
import Content from './Content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Content />, document.getElementById('root'));
// ReactDOM.render(<CommentApp />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
