import './styles/global.scss';
import 'typeface-roboto';
import 'core-js';
import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import { createStore } from './models'

const history = createBrowserHistory();

const store = createStore({}, { history });


const root = document.createElement('div');
document.body.appendChild(root);
root.style.height = "100%";

function renderApp() {
  render(
    <App history={history} store={store} />,
    root
  );
}

export function getStore() {
  return store;
}

renderApp();
