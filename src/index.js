import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import middlewares from './middlewares';

// Integrating Redux Chrome Developer Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers( middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);