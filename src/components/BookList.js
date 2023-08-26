import React from 'react';
import Book from './Book';
import '../style/BookList.css'

const BookList = ({ books, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default BookList;
