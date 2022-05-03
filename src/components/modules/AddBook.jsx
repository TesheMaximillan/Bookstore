import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { createBooks } from '../../redux/books/books';

function AddBook() {
  const [addBook, setAddBook] = useState({
    id: uuidv4(),
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBooks(addBook));
  };

  const onInputChange = (e) => {
    setAddBook({
      ...addBook,
      [e.target.name]: e.target.value,
    });
  };

  const { title, author } = addBook;
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-title"
        type="text"
        placeholder="Title"
        value={title}
        name="title"
        onChange={onInputChange}
      />
      <input
        className="input-author"
        type="text"
        placeholder="Author"
        value={author}
        name="author"
        onChange={onInputChange}
      />
      <button className="btn btn-submit" type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
