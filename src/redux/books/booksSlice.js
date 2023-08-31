import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'njz9wVQfdYyhGy64SIMh';
const initialState = {
  books:
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

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseUrl}/${appId}/books`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload });
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
