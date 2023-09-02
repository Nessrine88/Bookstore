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
        <p className="catg common">{category}</p>
        <h3 className="common">{title}</h3>
        <p className="auth common">
          {author}
        </p>
        <button className="firstBtns common" type="button" onClick={handleDelete}>
          Comments
        </button>
        <button className="firstBtns bbtn common" type="button" onClick={handleDelete}>
          Remove
        </button>
        <button className="firstBtns common" type="button" onClick={handleDelete}>
          Edit
        </button>
      </div>
      <img src={cercle} alt="" />
      <p className="percent">
        60%
        <br />
        <span className="state common">Completed</span>
      </p>
      <div className="last">
        <p className="comment common">Current Chapter</p>
        <p className="chapter common">Chapter 17</p>
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
