import React from 'react';
import AlbumList from 'components/AlbumsList/AlbumList';
import styles from './AllAlbumsView.module.sass';
import AddForm from '../../components/AddForm/AddForm';

const AllAlbumsView = () => (
  <div className={styles.allAlbumsView}>
    <div className={styles.formWrap}>
      <AddForm className={styles.addForm} />
    </div>
    <AlbumList className={styles.listWrap} />
  </div>
);

export default AllAlbumsView;
