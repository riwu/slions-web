import React from 'react';

const Anchor = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {React.isValidElement(children) ? React.cloneElement(children, { href: props.href }) : children}
  </a>
);

export default Anchor;
