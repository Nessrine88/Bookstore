import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {Object.values(books).map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
