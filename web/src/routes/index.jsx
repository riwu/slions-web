import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Classes from '../pages/Classes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/classes/:id?" component={Classes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
