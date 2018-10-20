import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import Homepage from '../animation-homepage';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/animation-homepage">Animation demo</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/animation-homepage" component={Homepage} />
    </main>
  </div>
);

export default App;
