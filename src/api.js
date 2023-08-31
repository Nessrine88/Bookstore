import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const fetchBooks = async (appId) => {
  const response = await axios.get(`${baseURL}${appId}/books`);
  return response.data;
};

export const addBook = async (appId, bookData) => {
  const response = await axios.post(`${baseURL}${appId}/books`, bookData);
  return response.data;
};

export const removeBook = async (appId, itemId) => {
  const response = await axios.delete(`${baseURL}${appId}/books/${itemId}`);
  return response.data;
};
