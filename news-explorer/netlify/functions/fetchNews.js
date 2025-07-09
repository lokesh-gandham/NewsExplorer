const axios = require('axios');

exports.handler = async function(event) {
  const { category = '', country = 'us', query = '' } = event.queryStringParameters || {};
  const apiKey = process.env.NEWS_API_KEY;  // server-side env var without VITE_ prefix
  const baseUrl = 'https://newsapi.org/v2';

  // Decide which endpoint to call based on presence of `query`
  let url = '';
  if (query) {
    url = `${baseUrl}/everything?q=${encodeURIComponent(query)}${category ? `&category=${category}` : ''}&apiKey=${apiKey}`;
  } else {
    url = `${baseUrl}/top-headlines?country=${country}&apiKey=${apiKey}${category ? `&category=${category}` : ''}`;
  }

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.articles),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

