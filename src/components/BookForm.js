import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../style/BookForm.css';

function BookForm() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (id || (title && author)) {
      dispatch(addBook({ id, title, author }));
      setId('');
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
