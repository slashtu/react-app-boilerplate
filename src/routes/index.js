import React from 'react';
import { Switch, Route } from 'react-router';

import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import NoMatch from 'pages/NoMatch/NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;
