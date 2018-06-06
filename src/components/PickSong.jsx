import React from 'react';
import { connect } from 'react-redux';
import { Table, Checkbox } from 'antd';

const PickSong = props => (
  <Table
    dataSource={Object.entries(props.songsList).map(([id, song]) => ({
      key: id,
      name: song.nativeTrackName,
    }))}
    columns={[
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Mandatory',
        render: ({ key }) => (
          <Checkbox
            checked={props.songs[key]}
            onChange={e => props.onSelect(key, e.target.checked || undefined)}
          />
        ),
      },
      {
        title: 'Optional',
        render: ({ key }) => (
          <Checkbox
            checked={props.songs[key] === false}
            onChange={e => props.onSelect(key, e.target.checked ? false : undefined)}
          />
        ),
      },
    ]}
  />
);

PickSong.defaultProps = {
  songs: {},
};

export default connect((state, props) => ({ songsList: state.songs[props.language] }))(PickSong);
