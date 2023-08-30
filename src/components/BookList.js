// BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          itemId={book.item_id}
          onDelete={() => handleRemoveBook(book.item_id)}
        />
      ))}
    </div>
  );
}

export default BookList;
