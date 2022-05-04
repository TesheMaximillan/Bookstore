import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createBooks } from '../../redux/actions/books';

function AddBook() {
  const [addBook, setAddBook] = useState({
    title: '',
    author: '',
    category: '',
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

  const { title, author, category } = addBook;

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
      <select
        value={category}
        name="category"
        className="book-category"
        onChange={onInputChange}
      >
        <option value="Fiction">Fiction</option>
        <option value="Classic">Classic</option>
        <option value="Other">Other</option>
      </select>
      <button className="btn btn-submit" type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
