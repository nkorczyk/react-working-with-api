import React, { useEffect, useState } from 'react';
import NewSingle from '../NewSingle/NewSingle';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url =
      'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-12&sortBy=publishedAt&apiKey=33af02ae673140ccab96f444c210a391';

    fetch(url)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.log('error: ', error));
  }, []);

  console.log('News', news);

  const renderItem = () =>
    news.map(item => <NewSingle key={item.publishedAt} item={item}></NewSingle>);

  return <ul>{renderItem()}</ul>;
};

export default News;
