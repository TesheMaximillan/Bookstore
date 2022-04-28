import React, { useState } from 'react';

function AddBook() {
  const [addBook, setAddBook] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (e) => {
    setAddBook({
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
        onSubmit={onInputChange}
      />
      <input
        className="input-author"
        type="text"
        placeholder="Author"
        value={author}
        name="author"
        onSubmit={onInputChange}
      />
      <button className="btn btn-submit" type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
