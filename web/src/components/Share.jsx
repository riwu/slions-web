import React from 'react';
import { Button } from 'antd';
import copy from 'copy-text-to-clipboard';

const Share = (props) => {
  const link = `${window.location.origin}/classes/${props.id}/join`;
  return (
    <h3>
      <div>
        Share this link with your class:{' '}
        <a target="_blank" href={link}>
          {link}
        </a>
      </div>
      <Button icon="copy" onClick={() => copy(link)}>
        Copy
      </Button>
    </h3>
  );
};

export default Share;
