import React, { useEffect, useState, useMemo } from 'react';

import NewSingle from '../NewSingle/NewSingle';
import { apiKey, baseUrl } from '../../constants/URL';

const News = ({ value: { type, query } }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = `${baseUrl}${type}?${query}&apiKey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(({ articles }) => setNews(articles))
      .catch(error => console.log('error: ', error));
  }, [query, type]);

  const renderItem = useMemo(() => news.map(item => <NewSingle key={item.url} item={item} />), [
    news,
  ]);

  return <div className="row">{renderItem}</div>;
};

export default News;
