import React from 'react';

import AddBook from '../modules/AddBook';
import Book from '../modules/Book';

function Books() {
  return (
    <div>
      <Book />
      <h2 className="heading-2">ADD NEW BOOK</h2>
      <AddBook />
    </div>
  );
}

export default Books;
