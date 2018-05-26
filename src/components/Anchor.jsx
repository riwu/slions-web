import React from 'react';

const Anchor = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export default Anchor;
