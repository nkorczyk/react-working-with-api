import React from 'react';

import News from './News/News';
import SideNews from './SideNews/SideNews';

import NEWS from '../constants/NEWS';

import './App.css';

const App = () => (
  <div className="container-fluid">
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper indigo lighten">
          <a href="/" className="bran-logo center">
            My feed
          </a>
        </div>
      </nav>
    </div>
    <div className="row">
      <div className="col s8">
        {NEWS.map(news => (
          <News key={news.query} value={news} />
        ))}
      </div>
      <div className="col s4">
        <SideNews value={NEWS[2]} />
      </div>
    </div>
  </div>
);

export default App;
