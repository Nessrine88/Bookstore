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
    <div className="formm">
      <h2 className="H2">ADD NEW BOOK</h2>
      <form onSubmit={handleAdd}>
        <input
          className="titleInput"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="catInput"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="option1">Fiction</option>
          <option value="option2">Action</option>
          <option value="option3">Romance</option>
        </select>

        <button className="formBtn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
