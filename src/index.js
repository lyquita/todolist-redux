import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './stores/index'
import {Provider} from 'react-redux'


console.log('Initial state: ', store.getState())

store.subscribe(
 () => localStorage.setItem("todos", JSON.stringify(store.getState())),
 console.log("State after dispatch: ", store.getState())
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


