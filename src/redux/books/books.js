/* eslint-disable default-param-last */
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
};

// Action Creators
const createBooks = (book) => ({ type: ADD_BOOK, book });

const removeBooks = (book) => ({ type: REMOVE_BOOK, book });

export { createBooks, removeBooks };

export default bookReducer;
