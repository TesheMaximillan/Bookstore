import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK, RETRIEVE_BOOKS } from '../actionTypes/actionTypes';
import { addBook, getBooks, removeBook } from '../api/services';

const createBooks = (aBook) => async (dispatch) => {
  try {
    const book = { id: uuidv4(), ...aBook };
    const response = await addBook(book);
    dispatch({ type: ADD_BOOK, book: response.data });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const retrieveBooks = () => async (dispatch) => {
  try {
    const response = await getBooks();
    dispatch({ type: RETRIEVE_BOOKS, book: response.data });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeBooks = (book) => async (dispatch) => {
  try {
    const response = await removeBook(book.id);
    dispatch({ type: REMOVE_BOOK, book: response.data });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { createBooks, removeBooks, retrieveBooks };
