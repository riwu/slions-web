import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { register } from './registerServiceWorker';

const logError = console.error;
console.error = (...error) => {
  if (
    // this is due to nesting div inside Menu for right-aligned menu items
    !/Warning: (React does not recognize the.*prop on a DOM|Unknown event handler property|Received `false` for a non-boolean attribute `active`)[^]*in Menu \(created by Menu\)/.test(error[0] || '')
  ) {
    logError(...error);
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

register({
  onUpdate: () => {
    alert('Website has been updated, click OK to refresh');
    window.location.reload();
  },
});
