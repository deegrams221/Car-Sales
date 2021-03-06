import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

//  createStore and setup a reducer
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
// import Provider and wrap the Provider component around <App />
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
