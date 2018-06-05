import React from 'react';
import { connect } from 'react-redux';
import { Table, Checkbox } from 'antd';

const PickSong = props => (
  <Table
    dataSource={Object.entries(props.songs).map(([id, song]) => ({
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
            checked={props.selectedSongs[key] === undefined || props.selectedSongs[key] === true}
            onChange={e => props.onSelect(key, e.target.checked || null)}
          />
        ),
      },
      {
        title: 'Optional',
        render: ({ key }) => (
          <Checkbox
            checked={props.selectedSongs[key] === false}
            onChange={e => props.onSelect(key, e.target.checked ? false : null)}
          />
        ),
      },
    ]}
  />
);

PickSong.defaultProps = {
  songs: {},
};

export default connect((state, props) => ({ songs: state.songs[props.language] }))(PickSong);
