import React from 'react';
import { Button } from 'antd';

const CreateClass = props => (
  <Button className={props.className} type="primary">
    Create new class
  </Button>
);

export default CreateClass;
