/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks, retrieveBooks } from '../../redux/actions/books';
import Card from '../common/Card';
import Progress from '../common/Progress';

function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  return (
    <ul>
      {books && books.map((book) => (
        <Card key={book.item_id}>
          <li className="list-group-item">
            <div className="book-description">
              <span className="category">{book.category}</span>
              <span className="title">{book.title}</span>
              <span className="author">Default Author</span>
            </div>
            <div className="control-buttons">
              <button type="button" className="btn-card">Comments</button>
              <button type="button" className="btn-card" onClick={() => dispatch(removeBooks(book.item_id))}>
                Remove
              </button>
              <button type="button" className="btn-card">Edit</button>
            </div>
          </li>
          <Progress />
        </Card>
      ))}
    </ul>
  );
}

export default Book;
