import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';

require('./styles/global.scss');

ReactDOM.render(
    <Router >
        <App />
    </Router>,
    document.getElementById('root')
);