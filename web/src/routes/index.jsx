import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home';
import Classes from '../pages/Classes';
import Class from '../pages/Class';
import JoinedClasses from '../pages/JoinedClasses';
import JoinClass from '../pages/JoinClass';
import LoggedNavigation from './LoggedNavigation';
import HomeNavigation from './HomeNavigation';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/class*">
        <React.Fragment>
          <LoggedNavigation />
          <Switch>
            <PrivateRoute exact path="/class/:id/join" component={JoinClass} />
            <PrivateRoute exact path="/classes/joined" component={JoinedClasses} />
            <PrivateRoute exact path="/classes" component={Classes} />
            <PrivateRoute exact path="/class/:id" component={Class} />
          </Switch>
        </React.Fragment>
      </Route>

      <Route path="/">
        <React.Fragment>
          <HomeNavigation />
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
