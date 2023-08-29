import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <BookList books={books} onDelete={handleDeleteBook} />
                <BookForm onAdd={handleAddBook} />
              </>
            )}
          />
          <Route path="/categories" element={<h2>Categories Page</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
