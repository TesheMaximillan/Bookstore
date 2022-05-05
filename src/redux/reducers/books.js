/* eslint-disable default-param-last */
import { ADD_BOOK, REMOVE_BOOK, RETRIEVE_BOOKS } from '../actionTypes/actionTypes';

// Reducer
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_BOOKS:
      return action.book;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.item_id);
    default:
      return state;
  }
};

export default bookReducer;
