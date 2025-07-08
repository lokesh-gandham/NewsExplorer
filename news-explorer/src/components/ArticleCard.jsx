import { useNavigate } from 'react-router-dom';

function ArticleCard({ article }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/article', { state: { article } });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800 max-w-md"
      style={{ overflow: 'hidden' }} // make sure no overflow hides the content
    >
      {article.urlToImage && (
        <div
          style={{ height: '192px', width: '100%', overflow: 'hidden' }} // 192px = 48 * 4 for h-48
          className="rounded-t-lg"
        >
          <img
            src={article.urlToImage}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
          {article.title}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {article.description || 'No description available.'}
        </p>

        <div className="mt-4 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>{article.source?.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
