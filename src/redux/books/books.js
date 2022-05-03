/* eslint-disable default-param-last */
// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

// Reducer
const bookReducer = (state = [initialState], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
};

// Action Creators
const createBooks = (book) => ({ type: ADD, book });

const removeBooks = (book) => ({ type: REMOVE, book });

export { createBooks, removeBooks };

export default bookReducer;
