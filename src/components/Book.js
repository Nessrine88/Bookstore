import React from 'react';
import '../style/Book.css';
import PropTypes from 'prop-types';

function Book({ title, author, onDelete }) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>
        Author:
        {author}
      </p>
      <button type="button" onClick={onDelete}>Delete</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
