// Book.js
import React from 'react';
import '../style/Book.css';
import PropTypes from 'prop-types';

function Book({
  category, title, author, onDelete, itemId,
}) {
  const handleDelete = () => {
    onDelete(itemId);
  };

  return (
    <div className="book">
      <p>{itemId}</p>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>
        Author:
        {author}
      </p>
      <button type="button" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
