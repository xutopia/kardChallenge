import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/store';
import initialState from './reducers/initialState';
import App from './router/App.jsx';


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={configureStore(initialState)}>
      <App />
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'));
