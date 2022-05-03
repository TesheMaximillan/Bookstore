/* eslint-disable default-param-last */
import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'book 1',
    author: 'book 1 author',
  },
  {
    id: uuidv4(),
    title: 'book 2',
    author: 'book 2 author',
  },
  {
    id: uuidv4(),
    title: 'book 3',
    author: 'book 3 author',
  },
];

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
};

// Action Creators
const createBooks = (title, author) => ({ type: ADD_BOOK, book: { id: uuidv4(), title, author } });

const removeBooks = (book) => ({ type: REMOVE_BOOK, book });

export { createBooks, removeBooks };

export default bookReducer;
