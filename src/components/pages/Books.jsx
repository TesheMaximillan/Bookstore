import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddBook from '../modules/AddBook';
import Book from '../modules/Book';

function Books() {
  const books = [
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
