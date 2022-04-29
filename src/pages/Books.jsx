import React from 'react';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

function Books() {
  const books = [
    {
      id: '1',
      title: 'book 1',
      author: 'book 1 author',
    },
    {
      id: '2',
      title: 'book 2',
      author: 'book 2 author',
    },
    {
      id: '3',
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
