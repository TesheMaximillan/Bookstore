/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks, retrieveBooks } from '../../redux/actions/books';

function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  return (
    <ul>
      {books && books.map((book) => (
        <li key={book.item_id} className="list-group-item">
          <div className="book-description">
            <span className="title">{book.title}</span>
            <span className="author">{book.category}</span>
          </div>
          <div className="control-buttons">
            <button type="button" className="Remove" onClick={() => dispatch(removeBooks(book.item_id))}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Book;
