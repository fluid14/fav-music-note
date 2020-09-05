import React from 'react';
import AlbumList from 'components/AlbumsList/AlbumList';
import { AlbumListConsumer } from 'context/AlbumsListContext';
import styles from './AllAlbumsView.module.sass';
import AddForm from '../../components/AddForm/AddForm';

const AllAlbumsView = () => (
  <div className={styles.allAlbumsView}>
    <div className={styles.formWrap}>
      <AddForm className={styles.addForm} />
    </div>
    <AlbumListConsumer>
      {albumConsumer => {
        const { albumList, deleteAlbum, markAsBest } = albumConsumer;
        return (
          <AlbumList
            albumList={albumList}
            deleteFn={deleteAlbum}
            markAsBestFn={markAsBest}
            className={styles.listWrap}
          />
        );
      }}
    </AlbumListConsumer>
  </div>
);

export default AllAlbumsView;
