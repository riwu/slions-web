import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import './index.css';
import App from './App';
import { register } from './registerServiceWorker';

const HotApp = hot(module)(App);
ReactDOM.render(<HotApp />, document.getElementById('root'));

register({
  onUpdate: () => {
    alert('Website has been updated, click OK to refresh');
    window.location.reload();
  },
});
