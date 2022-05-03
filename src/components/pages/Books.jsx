import React from 'react';
import { useSelector } from 'react-redux';

import AddBook from '../modules/AddBook';
import Book from '../modules/Book';

function Books() {
  const books = useSelector((state) => state.bookReducer);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <h2 className="heading-2">ADD NEW BOOK</h2>
      <AddBook />
    </div>
  );
}

export default Books;
