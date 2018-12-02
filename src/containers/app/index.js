import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import Homepage from '../homepage';
import './index.scss';

const App = () => (
  <div className="app">
    <header style={{ display: 'none' }}>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/homepage">Animation demo</Link>
    </header>

    <main>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/homepage" component={Home} />
    </main>
  </div>
);

export default App;
