import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createBooks } from '../../redux/actions/books';
import Button from '../common/Button';

function AddBook() {
  const [addBook, setAddBook] = useState({
    title: '',
    author: '',
    category: 'Action',
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
  const categories = ['Action', 'Science Fiction', 'Economy', 'Classic', 'Other'];

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-title"
        type="text"
        placeholder="Title"
        value={title}
        name="title"
        onChange={onInputChange}
        required
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
        className="input-category"
        onChange={onInputChange}
      >
        {categories.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <Button type="submit" className="btn-submit">Add Book</Button>
    </form>
  );
}

export default AddBook;
