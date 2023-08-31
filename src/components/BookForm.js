import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, addBook } from '../redux/books/booksSlice';
import '../style/BookForm.css';

function BookForm() {
  const [itemId, setItemId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (itemId && title && author && category) {
      dispatch(addBook({
        item_id: itemId,
        title,
        author,
        category,
      }));
      setItemId('');
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
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
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
