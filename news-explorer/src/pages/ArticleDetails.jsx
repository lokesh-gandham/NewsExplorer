import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // The article is passed via state from the ArticleCard link
  const article = location.state?.article;

  if (!article) {
    // If no article data is available, redirect back to home or show a message
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <p className="text-center text-red-500 mb-4">
          Article data not found.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow-md">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-64 object-cover rounded"
        />
      )}

      <h1 className="mt-6 mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        {article.title}
      </h1>

      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-4">
        {article.author && <span>By {article.author}</span>}
        <span>
          {new Date(article.publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        {article.source?.name && <span>Source: {article.source.name}</span>}
      </div>

      <p className="mb-6 text-gray-800 dark:text-gray-300 whitespace-pre-line">
        {article.content || article.description || 'No content available.'}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Read more
      </a>
    </article>
  );
}
