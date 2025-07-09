import axios from 'axios';

export const fetchTopHeadlines = async (category = '', country = 'us') => {
  const params = new URLSearchParams({ country });
  if (category) params.append('category', category);

  const url = `/.netlify/functions/fetchNews?${params.toString()}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchSearchResults = async (query, category = '') => {
  const params = new URLSearchParams({ query });
  if (category) params.append('category', category);

  const url = `/.netlify/functions/fetchNews?${params.toString()}`;
  const response = await axios.get(url);
  return response.data;
};

