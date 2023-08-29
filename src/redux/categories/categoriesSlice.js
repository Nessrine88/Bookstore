import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice(
  {
    name: 'categories',
    initialState: {
      ...initialState,
      categories: ['under construction'],
    },
    reducers: {},
  },
);

export default categoriesSlice.reducer;
