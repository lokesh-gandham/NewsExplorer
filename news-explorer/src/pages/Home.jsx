import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setArticles,
  setError,
  setLoading,
} from '../features/news/newsSlice';

import ArticleCard from '../components/ArticleCard';
import Loader from '../components/Loader';
import { fetchTopHeadlines } from '../Api/Api';

const categories = ['general', 'education', 'technology', 'entertainment', 'sports', 'business'];

const countries = [
  { code:'us', name: 'US'},
  {code:'ca' ,name: 'canada' },
  {code:'in',name:'india'}
];

export default function Home() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [selectedCountry, setSelectedCountry] = useState('us');

  useEffect(() => {
    const loadNews = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchTopHeadlines(selectedCategory, selectedCountry);
        dispatch(setArticles(data));
        dispatch(setError(null));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadNews();
  }, [dispatch, selectedCategory, selectedCountry]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-center mb-4">
        {countries.find(c => c.name === selectedCountry)?.name} Top Headlines
      </h2>

      {/* Country Selector */}
      <div className="flex justify-center mb-4">
      <select
  value={selectedCountry}
  onChange={handleCountryChange}
  className="px-3 py-2 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
>
  {countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.flag} {country.name}
    </option>
  ))}
</select>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === cat
                ? 'bg-purple-700 text-white'
                : 'bg-white text-purple-700 border-purple-700 hover:bg-purple-100'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

   <h2 className="text-xl font-semibold text-center mb-4">
  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} News in {countries.find(c => c.code === selectedCountry)?.name}
</h2>
      {/* Loading / Error / Articles */}
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <ArticleCard key={i} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
