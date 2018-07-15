import * as React from "react"
import TestComponent from './components/TestComponent'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/global.scss';

const store = configureStore({}); // You can also pass in an initialState here

const root = document.createElement('div');
document.body.appendChild(root);
root.style.height = "100%";

render(
    <Provider store={store}>
        <TestComponent />
    </Provider>,
    root
);
