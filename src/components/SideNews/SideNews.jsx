import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

import { apiKey, baseUrl } from '../../constants/URL';
import SingleSide from '../SingleSide/SingleSide';

const SideNews = ({ value: { type, query } }) => {
  const [sideNews, setSideNews] = useState([]);
  const url = `${baseUrl}${type}?${query}&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then(({ data: { articles } }) => setSideNews(articles))
      .catch(error => console.log('error: ', error));
  }, [url]);

  const renderItem = useMemo(
    () => sideNews.map(item => <SingleSide key={item.url} item={item} />),
    [sideNews],
  );

  return <div>{renderItem}</div>;
};

export default SideNews;
