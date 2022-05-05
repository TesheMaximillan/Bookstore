import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK, RETRIEVE_BOOKS } from '../actionTypes/actionTypes';
import { addBook, getBooks, removeBook } from '../api/services';

const createBooks = (aBook) => (async (dispatch) => {
  const book = { item_id: uuidv4(), ...aBook };
  dispatch({ type: ADD_BOOK, book }); // Add book to the store
  await addBook(book); // Add book to the API
});

const retrieveBooks = () => (async (dispatch) => {
  const response = await getBooks(); // Get books from the API
  const book = Object.keys(response.data).map((id) => ({
    item_id: id,
    title: response.data[id][0].title,
    category: response.data[id][0].category,
  })); // Organize books according to the store sturcture
  dispatch({ type: RETRIEVE_BOOKS, book }); // Add books to the store
});

const removeBooks = (id) => (async (dispatch) => {
  dispatch({ type: REMOVE_BOOK, item_id: id }); // Remove book from the store
  await removeBook(id); // Remove book from the api
});

export { createBooks, removeBooks, retrieveBooks };
