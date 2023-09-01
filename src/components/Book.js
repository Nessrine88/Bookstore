// Book.js
import React from 'react';
import '../style/Book.css';
import PropTypes from 'prop-types';
import cercle from '../assets/cercle.PNG';

function Book({
  category, title, author, onDelete, itemId,
}) {
  const handleDelete = () => {
    onDelete(itemId);
  };

  return (
    <div className="book">
      <div className="left">
        <p className="catg">{category}</p>
        <h3>{title}</h3>
        <p className="auth">
          {author}
        </p>
        <button className="firstBtns" type="button" onClick={handleDelete}>
          Comments
        </button>
        <button className="firstBtns bbtn" type="button" onClick={handleDelete}>
          Remove
        </button>
        <button className="firstBtns" type="button" onClick={handleDelete}>
          Edit
        </button>
      </div>
      <img src={cercle} alt="" />
      <p className="percent">
        60%
        <br />
        <span className="state">Completed</span>
      </p>
      <div className="last">
        <p className="comment">Current Chapter</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="btn">UPDATE PROGRESS</button>
      </div>
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
