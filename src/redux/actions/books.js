import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK } from '../actionTypes/actionTypes';

// Action Creators
const createBooks = (title, author) => ({
  type: ADD_BOOK,
  book: { id: uuidv4(), title, author },
});

const removeBooks = (book) => ({ type: REMOVE_BOOK, book });

export { createBooks, removeBooks };
