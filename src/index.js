import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './stores/index'
import {Provider} from 'react-redux'


console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })


unsubscribe()
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about substribe' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


