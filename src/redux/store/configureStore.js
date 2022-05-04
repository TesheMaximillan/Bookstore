import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from '../reducers/books';
import categoryReducer from '../reducers/categories';

const rootReducer = combineReducers({ bookReducer, categoryReducer });
const middleware = [logger, thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
