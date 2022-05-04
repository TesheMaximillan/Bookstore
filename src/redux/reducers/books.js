/* eslint-disable default-param-last */
import { ADD_BOOK, REMOVE_BOOK, RETRIEVE_BOOKS } from '../actionTypes/actionTypes';

// const initialState = [
//   {
//     id: uuidv4(),
//     title: 'book 1',
//     author: 'book 1 author',
//   },
//   {
//     id: uuidv4(),
//     title: 'book 2',
//     author: 'book 2 author',
//   },
//   {
//     id: uuidv4(),
//     title: 'book 3',
//     author: 'book 3 author',
//   },
// ];

// Reducer
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_BOOKS:
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
