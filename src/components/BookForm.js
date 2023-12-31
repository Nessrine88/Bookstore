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
    if (title && category) {
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
      <h2 className="AdBok common ">ADD NEW BOOK</h2>
      <form onSubmit={handleAdd}>
        <input
          className="titleInput common"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="catInput common "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>

        <button className="formBtn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
