import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./default.css";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import store from './store/store2';
// import store from './redux/Store';

// let store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


