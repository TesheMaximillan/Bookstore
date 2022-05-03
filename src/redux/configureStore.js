import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({ bookReducer, categoryReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
