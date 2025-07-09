import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (category = '', country = 'us') => {
  console.log("Using API Key:", API_KEY);
console.log("Request URL:", `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}${category ? `&category=${category}` : ''}`);

  const url = `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}${category ? `&category=${category}` : ''}`;
  const response = await axios.get(url);
  return response.data.articles;
};
export const fetchSearchResults = async (query, category = '') => {
  const url = `${BASE_URL}/everything?q=${query}&from=2025-06-09&sortBy=publishedAt${category ? `&category=${category}` : ''}&apiKey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};

