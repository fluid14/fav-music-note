import React from 'react';
import cs from 'classnames';
import styles from './AllAlbumsView.module.sass';
import AddForm from '../../components/AddForm/AddForm';
import AlbumList from 'components/AlbumsList/AlbumList';

const AllAlbumsView = () => (
  <div className={cs(styles.allAlbumsView, 'wrap')}>
    <div className={styles.formWrap}>
      <AddForm />
    </div>
    <div className={styles.listWrap}>
      <AlbumList />
    </div>
  </div>
);

export default AllAlbumsView;
