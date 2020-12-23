import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import tasks from './reducers'
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';

const store = createStore(tasks)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
