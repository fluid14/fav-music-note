import React from 'react';
import cs from 'classnames';
import styles from './AllAlbumsView.module.sass';
import AddForm from '../../components/AddForm/AddForm';
import AlbumsList from '../../components/AlbumsList/AlbumsList';

const AllAlbumsView = () => (
  <div className={cs(styles.allAlbumsView, 'wrap')}>
    <div className={styles.formWrap}>
      <AddForm />
    </div>
    <div className={styles.listWrap}>
      <AlbumsList />
    </div>
  </div>
);

export default AllAlbumsView;
