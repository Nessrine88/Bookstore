import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { addBook } from '../redux/books/booksSlice';
import '../style/BookForm.css';

function BookForm() {
  const [itemId, setItemId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  // Use useSelector to access the initial category value
  const initialCategory = useSelector((state) => state.categories.categories[0]);

  const [category, setCategory] = useState(initialCategory); // Set initial value

  const handleAdd = (e) => {
    e.preventDefault();
    if (itemId || (title && author && category)) {
      dispatch(addBook({
        item_id: itemId,
        title,
        author,
        category,
      }));
      setItemId('');
      setTitle('');
      setAuthor('');
      setCategory(initialCategory); // Reset category to initial value after adding book
    }
  };

  return (
    <div>
      <form>
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
        <button type="button" onClick={handleAdd}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
