import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Classes from '../pages/Classes';
import JoinedClasses from '../pages/JoinedClasses';
import JoinClass from '../pages/JoinClass';
import Navigation from '../components/Navigation';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <React.Fragment>
        <Navigation />
        <Switch>
          <PrivateRoute path="/classes/joined" component={JoinedClasses} />
          <PrivateRoute path="/classes/:id?" component={Classes} />
        </Switch>
      </React.Fragment>
      <PrivateRoute path="/class/:id/join" component={JoinClass} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
