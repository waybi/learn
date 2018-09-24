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

function stateChanger (state, action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        state.title.text = action.text
        break
      case 'UPDATE_TITLE_COLOR':
        state.title.color = action.color
        break
      default:
        break
    }
  }

function createStore(state,stateChange) {
    const getState = () => state
    const dispatch = (action) =>  stateChanger(state, action)
    return { getState, dispatch }
}

function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

const store = createStore(appState,stateChange)
renderApp(store.getState())
store.dispatch({type:'UPDATE_TITLE_TEXT',text:'《javascrip设计模式》'})
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'prink' }) // 修改标题颜色
console.log(store.getState())
renderApp(store.getState()) // 把新的数据渲染到页面上


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
