import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults, fetchTopHeadlines } from '../Api/Api';
import ArticleCard from '../components/ArticleCard';
import Loader from '../components/Loader';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const keyword = query.get('query') || '';
  const category = query.get('category') || '';

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      setError(null);
      try {
        let data = [];
        if (keyword) {
          data = await fetchSearchResults(keyword, category); // pass category if your API supports it
        } else if (category) {
          data = await fetchTopHeadlines(category);
        } else {
          data = await fetchTopHeadlines();
        }
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch articles');
      }
      setLoading(false);
    }

    fetchArticles();
  }, [keyword, category]);

  if (loading) return  <Loader/>;
  if (error) return <p>{error}</p>;
  if (articles.length === 0) return <p>No articles found.</p>;

  return (
    <>
             <h2 className="text-xl font-semibold text-center mb-4">
  All over {keyword.charAt(0).toUpperCase() + keyword.slice(1)} News
</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
    </>
  );
}
