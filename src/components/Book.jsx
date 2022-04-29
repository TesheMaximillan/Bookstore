/* eslint-disable react/prop-types */
import React from 'react';

function Book(props) {
  const { book } = props;
  return (
    <div>
      <ul>
        <li className="list-group-item">
          <div className="book-description">
            <span className="title">{book.title}</span>
            <span className="author">{book.author}</span>
          </div>
          <div className="control-buttons">
            <button type="button" className="Remove">
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Book;
