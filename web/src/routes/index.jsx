import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Classes from '../pages/Classes';
import JoinClass from '../pages/JoinClass';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/classes/:id?" component={Classes} />
      <PrivateRoute path="/class/:id/join" component={JoinClass} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
