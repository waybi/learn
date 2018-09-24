import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appState = {
    title: {
      text: 'React.js 小书',
      color: 'red',
    },
    content: {
      text: 'React.js 小书内容',
      color: 'blue'
    }
  }

  function renderApp (appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
  }
  
  function renderTitle (title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
  }
  
  function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
  }

  renderApp(appState)
  


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
