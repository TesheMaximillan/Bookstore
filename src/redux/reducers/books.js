/* eslint-disable default-param-last */
import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK, RETRIEVE_BOOK } from '../actionTypes/actionTypes';

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
    case RETRIEVE_BOOK:
      return action.book;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
