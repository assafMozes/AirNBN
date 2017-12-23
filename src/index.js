import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
	HashRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import App from './containers/App/App.view'
import store from './store'  

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router >
  </Provider>
  , document.querySelector('.main'));