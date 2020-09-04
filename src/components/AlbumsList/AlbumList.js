import React, { Component } from 'react';
import styles from './AlbumsList.module.sass';
import ListItem from 'components/ListItem/ListItem';
import translate from 'translations/en.json';
import { AlbumListConsumer } from 'context/AlbumsListContext';

class AlbumList extends Component {
  render() {
    return (
      <ul className={styles.albumsList}>
        <AlbumListConsumer>
          {albumConsumer => {
            const { albumList, deleteAlbum, markAsBest } = albumConsumer;
            return albumList.length > 0 ? (
              albumList.map(album => (
                <ListItem key={album[0]} id={album[0]} deleteFn={deleteAlbum} likeFn={markAsBest}>
                  {album[1].title}
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

export default AlbumList;
