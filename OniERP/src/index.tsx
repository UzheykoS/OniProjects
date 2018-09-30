import * as React from "react"
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/global.scss';
import initialState from './store/initialState';
import { HashRouter as Router } from 'react-router-dom';
import App from './app';
import 'typeface-roboto';
require('../public/images/favicon.png');

const store = configureStore(initialState);

const root = document.createElement('div');
document.body.appendChild(root);
root.style.height = "100%";

render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>,
    root
);
