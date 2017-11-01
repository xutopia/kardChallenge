import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(promise, createLogger())
    )
  );

  return store;
}

export default configureStore;
