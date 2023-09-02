import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = '3cbbR2tLH0zZYmxJq3ER';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseUrl}/${appId}/books`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

const initialState = {
  books:
  // Initial state:
[
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
],

};

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload });
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.title !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
