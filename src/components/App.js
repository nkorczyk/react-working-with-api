import React from 'react';
import News from './News/News';

import NEWS from '../constants/NEWS';

import './App.css';

const App = () => (
  <div className="App">
    <h1>My news</h1>
    {NEWS.map(news => (
      <News key={news.query} value={news} />
    ))}
  </div>
);

export default App;
