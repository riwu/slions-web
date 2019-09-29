import React from 'react';
import { Table } from 'antd';
import styles from './Table.module.css';

const TableComponent = props => (
  <Table
    {...props}
    rowClassName={(props.expandRowByClick || props.onRow) && styles.row}
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
