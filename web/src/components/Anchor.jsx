import React from 'react';

const Anchor = ({ children, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {React.isValidElement(children) ? React.cloneElement(children, { href: props.href }) : children}
  </a>
);

export default Anchor;
