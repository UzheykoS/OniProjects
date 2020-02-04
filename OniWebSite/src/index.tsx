import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

require('./styles/global.scss');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
