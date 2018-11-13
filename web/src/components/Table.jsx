import React from 'react';
import { Table } from 'antd';

const TableComponent = props => (
  <Table
    {...props}
    pagination={{ hideOnSinglePage: true }}
    columns={props.columns.map(({ children, ...col }) => ({
      ...(children
        ? {
            children: children.map(child => ({
              align: 'center',
              ...child,
            })),
          }
        : {
            align: 'center',
          }),
      ...col, // put this last so that component can override align property
    }))}
  />
);

export default TableComponent;
