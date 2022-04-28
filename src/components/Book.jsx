/* eslint-disable react/prop-types */
import React from 'react';

function Book(props) {
  const { books } = props;
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li className="list-group-item" key={book.id}>
            <span className="title">{book.title}</span>
            <span className="author">{book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
