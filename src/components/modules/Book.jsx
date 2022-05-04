/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeBooks, retrieveBooks } from '../../redux/actions/books';

function Book() {
  const dispatch = useDispatch();
  // const books = useSelector((state) => state.bookReducer);
  const books = Object.values(useSelector((state) => state.bookReducer));

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  const handleRemoveButton = (book) => {
    dispatch(removeBooks(book));
  };

  return (
    <ul>
      {books && books.map((book) => (
        <li key={uuidv4()} className="list-group-item">
          <div className="book-description">
            <span className="title">{book[0].title}</span>
            <span className="author">{book[0].category}</span>
          </div>
          <div className="control-buttons">
            <button type="button" className="Remove" onClick={() => handleRemoveButton(book)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Book;
