import React from 'react';
import '../style/Book.css'


const Book = ({ title, author, onDelete }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Book;
