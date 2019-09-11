import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

//  createStore and setup a reducer
export const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
// import Provider and wrap the Provider component around <App />
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
