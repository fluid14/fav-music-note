import React, { Component } from 'react';
import styles from './AlbumsList.module.sass';
import ListItem from '../ListItem/ListItem';
import { AlbumListConsumer } from '../../context/AlbumsListContext';

class AlbumsList extends Component {
  render() {
    return (
      <ul className={styles.albumsList}>
        <AlbumListConsumer>
          {albumConsumer => {
            const { albumList } = albumConsumer;
            return albumList.length > 0 ? (
              albumList.map(album => <ListItem key={album}>{album}</ListItem>)
            ) : (
              <p>brak</p>
            );
          }}
        </AlbumListConsumer>
      </ul>
    );
  }
}

export default AlbumsList;
