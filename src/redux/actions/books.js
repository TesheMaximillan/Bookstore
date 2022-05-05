import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK, RETRIEVE_BOOKS } from '../actionTypes/actionTypes';
import { addBook, getBooks, removeBook } from '../api/services';

const createBooks = (aBook) => (async (dispatch) => {
  const book = { item_id: uuidv4(), ...aBook };
  await addBook(book);
  dispatch({ type: ADD_BOOK, book });
});

const retrieveBooks = () => (async (dispatch) => {
  const response = await getBooks();
  const book = Object.keys(response.data).map((id) => ({
    item_id: id,
    title: response.data[id][0].title,
    category: response.data[id][0].category,
  }));
  dispatch({ type: RETRIEVE_BOOKS, book });
});

const removeBooks = (id) => (async (dispatch) => {
  await removeBook(id);
  dispatch({ type: REMOVE_BOOK, item_id: id });
});

export { createBooks, removeBooks, retrieveBooks };
