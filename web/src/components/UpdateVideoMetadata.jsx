import React from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import { updateVideoSize } from '../actions/api';

const UpdateVideoMetadata = props => {
  if (!props.isAdmin) return null;
  return (
    <Button
      className={props.className}
      type="primary"
      onClick={() => {
        message.loading('Updating video size...', 0);
        updateVideoSize()
          .then(() => {
            message.destroy();
            message.success('Update successful');
          })
          .catch(e => {
            message.destroy();
            message.error(`Failed to update: ${e.message}`);
          });
      }}
    >
      Update video metadata
    </Button>
  );
};

export default connect(state => ({ isAdmin: state.user.isAdmin }))(
  UpdateVideoMetadata
);
