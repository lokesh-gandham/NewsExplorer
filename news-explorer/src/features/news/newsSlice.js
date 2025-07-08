import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  category: '',
  searchQuery: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setLoading,
  setArticles,
  setError,
  setCategory,
  setSearchQuery,
} = newsSlice.actions;

export default newsSlice.reducer;
