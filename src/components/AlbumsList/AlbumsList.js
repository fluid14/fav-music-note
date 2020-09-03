import React, { Component } from 'react';
import styles from './AlbumsList.module.sass';
import ListItem from 'components/ListItem/ListItem';
import translate from 'translations/en.json';
import { AlbumListConsumer } from 'context/AlbumsListContext';

class AlbumsList extends Component {
  render() {
    return (
      <ul className={styles.albumsList}>
        <AlbumListConsumer>
          {albumConsumer => {
            const { albumList } = albumConsumer;
            return albumList.length > 0 ? (
              albumList.map(album => (
                <ListItem key={album.name} deleteFn={albumConsumer.deleteAlbum}>
                  {album.name}
                </ListItem>
              ))
            ) : (
              <p>{translate.emptyListMsg}</p>
            );
          }}
        </AlbumListConsumer>
      </ul>
    );
  }
}

export default AlbumsList;
