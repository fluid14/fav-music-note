import React, { Component } from 'react';
import styles from './AlbumsList.module.sass';
import ListItem from '../ListItem/ListItem';

class AlbumsList extends Component {
  render() {
    return (
      <ul className={styles.albumsList}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

export default AlbumsList;
