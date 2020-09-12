import React, { useEffect, useState, useMemo } from 'react';

import NewSingle from '../NewSingle/NewSingle';
import { apiKey, baseUrl } from '../../constants/URL';
import Error from '../Error/Error';

const News = ({ value: { type, query } }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const url = `${baseUrl}${type}?${query}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(({ articles }) => setNews(articles))
      .catch(() => setError(true));
  }, [url]);

  const renderItem = useMemo(() => news.map(item => <NewSingle key={item.url} item={item} />), [
    news,
  ]);

  return error ? <Error /> : <div className="row">{renderItem}</div>;
};

export default News;
