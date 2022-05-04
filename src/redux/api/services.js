import http from './api';

const UNIQUE_ID = 'zp3WEesjXOrWDYmLsbVA';

const getBooks = () => http.get(`/apps/${UNIQUE_ID}/books`);
const addBook = (book) => http.post(`/apps/${UNIQUE_ID}/books`, book);
const removeBook = (bookID) => http.delete(`/apps/${UNIQUE_ID}/books/${bookID}`);

const services = { getBooks, addBook, removeBook };

export default services;
