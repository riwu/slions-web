import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import Table from './Table';

const getUpdatedSongs = (prevSongs, selectedSongId, checked, newValue) => {
  const { [selectedSongId]: _, ...songs } = prevSongs;
  return { ...songs, ...(checked && { [selectedSongId]: newValue }) };
};

const PickSong = props => (
  <Table
    dataSource={Object.entries(props.songsList)
      .filter(([, song]) => song.language === props.language)
      .map(([id, song]) => ({
        key: id,
        name: song.translatedTitle,
      }))}
    columns={[
      {
        title: 'Name',
        dataIndex: 'name',
        align: 'left',
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

export default connect(state => ({ songsList: state.songs }))(PickSong);
