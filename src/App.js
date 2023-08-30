import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <BookList />
                <BookForm />
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
