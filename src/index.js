import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import './index.css';
import rootReducer from './reducers/rootReducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

