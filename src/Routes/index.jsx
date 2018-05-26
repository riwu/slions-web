import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import ClassList from '../pages/ClassList';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/classes" component={ClassList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
