/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks } from '../../redux/books/books';

function Book() {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleRemoveButton = (book) => {
    dispatch(removeBooks(book));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className="list-group-item">
          <div key="1.toString()" className="book-description">
            <span key="3" className="title">{book.title}</span>
            <span key="4" className="author">{book.author}</span>
          </div>
          <div key="{2}" className="control-buttons">
            <button key="{5}" type="button" className="Remove" onClick={() => handleRemoveButton(book)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Book;
