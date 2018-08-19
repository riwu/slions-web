import React from 'react';
import { connect } from 'react-redux';
import { Table, Checkbox } from 'antd';

const getUpdatedSongs = (prevSongs, selectedSongId, checked, newValue) => {
  const { [selectedSongId]: _, ...songs } = prevSongs;
  return { ...songs, ...(checked && { [selectedSongId]: newValue }) };
};

const PickSong = props => (
  <Table
    pagination={{ hideOnSinglePage: true }}
    dataSource={Object.entries(props.songsList).map(([id, song]) => ({
      key: id,
      name: song.translatedTitle,
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
            onChange={e =>
              props.onSongsUpdate(getUpdatedSongs(props.songs, key, e.target.checked, true))
            }
          />
        ),
      },
      {
        title: 'Optional',
        render: ({ key }) => (
          <Checkbox
            checked={props.songs[key] === false}
            onChange={e =>
              props.onSongsUpdate(getUpdatedSongs(props.songs, key, e.target.checked, false))
            }
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
