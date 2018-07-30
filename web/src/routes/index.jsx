import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Classes from '../pages/Classes';
import Class from '../pages/Class';
import JoinedClasses from '../pages/JoinedClasses';
import JoinClass from '../pages/JoinClass';
import Navigation from './Navigation';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/class/:id/join" component={JoinClass} />
      <React.Fragment>
        <Navigation />
        <Switch>
          <PrivateRoute path="/classes/joined" component={JoinedClasses} />
          <PrivateRoute path="/classes" component={Classes} />
          <PrivateRoute path="/class/:id" component={Class} />
        </Switch>
      </React.Fragment>
    </Switch>
  </Router>
);

export default Routes;
